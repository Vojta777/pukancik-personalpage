// src/app/profil/page.tsx

import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Metadata for the Profile page
export const metadata = { 
  title: 'Profil | ZoskaSnap'
};

const ProfilePage = () => {
  return (
    <main>
      <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Profil
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the users profile page where you can view or edit your information.
        </Typography>
        {/* Add user details, profile picture, or editable form components here */}
        {/* Example:
          <Avatar alt="User Name" src="/profile-pic.jpg" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
          <TextField label="Username" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Save Changes</Button>
        */}
      </Container>
    </main>
  );
};

export default ProfilePage;
