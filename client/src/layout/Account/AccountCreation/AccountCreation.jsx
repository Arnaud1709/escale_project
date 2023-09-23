import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";
import { withTranslation } from "react-i18next";
import accountCreationStyle from "./AccountCreation.style";

const AccountCreation = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {root} = accountCreationStyle;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <Container style={root}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center">
          Inscription
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Nom d'utilisateur"
            name="username"
            variant="outlined"
            margin="normal"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Adresse e-mail"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Mot de passe"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "10px" }}
          >
            S'inscrire
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default withTranslation()(AccountCreation);
