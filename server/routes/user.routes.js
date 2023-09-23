const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.json({ message: 'Compte utilisateur créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création du compte :', error);
    res.status(500).json({ message: 'Erreur lors de la création du compte' });
  }
});


router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const user = await User.findByIdAndUpdate(id, {
      username,
      email,
      password,
    });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({ message: 'Compte utilisateur modifié avec succès' });
  } catch (error) {
    console.error('Erreur lors de la modification du compte :', error);
    res.status(500).json({ message: 'Erreur lors de la modification du compte' });
  }
});

module.exports = router;
