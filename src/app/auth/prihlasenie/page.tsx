//src/app/auth/prihlasenie/page.tsx

import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Metadata for the Sign In page
export const metadata = { 
  title: 'Prihlasenie cez OAuth | ZoskaSnap'
};

const SignInPage = () => {
  return (
    <main>
      <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Prihlasenie
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please sign in using your preferred authentication provider.
        </Typography>
        {/* Here you would add OAuth buttons like Google, GitHub, etc. */}
        {/* Example:
          <Button variant="contained" color="primary">Sign in with Google</Button>
        */}
      </Container>
    </main>
  );
};

export default SignInPage;
