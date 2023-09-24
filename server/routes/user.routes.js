const express = require('express');
const user = require('../models/user.model');

const router = express.Router();

router.post('/user', async (req, res) => {
  try {
    const { name, email, pwd } = req.body;


    const newUser = new user({
      name,
      pwd,
      email,
    });

    // Enregistrez l'instance dans la base de données en utilisant la méthode save()
    const savedUser = await newUser.save();

    res.json({ message: 'Compte utilisateur créé avec succès', user: savedUser });
  } catch (error) {
    console.error('Erreur lors de la création du compte :', error);
    res.status(500).json({ message: 'Erreur lors de la création du compte' });
  }
});

router.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, pwd } = req.body;

    const userToUpdate = await user.findByIdAndUpdate(id, {
      name,
      pwd,
      email,
    });

    if (!userToUpdate) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Enregistrez les modifications de l'utilisateur dans la base de données en utilisant la méthode save()
    const updatedUser = await userToUpdate.save();

    res.json({ message: 'Compte utilisateur modifié avec succès', user: updatedUser });
  } catch (error) {
    console.error('Erreur lors de la modification du compte :', error);
    res.status(500).json({ message: 'Erreur lors de la modification du compte' });
  }
});

module.exports = router;
