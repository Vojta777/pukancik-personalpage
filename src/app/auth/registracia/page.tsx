import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Metadata for the Registration page
export const metadata = { 
  title: 'Registracia | ZoskaSnap'
};

const RegistrationPage = () => {
  return (
    <main>
      <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Registracia
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please create an account by providing your details.
        </Typography>
        {/* Here you can add your registration form */}
        {/* Example:
          <TextField label="Username" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" type="email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Register</Button>
        */}
      </Container>
    </main>
  );
};

export default RegistrationPage;
