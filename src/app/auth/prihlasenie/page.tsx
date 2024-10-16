// src/app/auth/prihlasenie/page.tsx

"use client"; // This makes the component a client component

import React from 'react';
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react"; // Import the signIn function

const SignInPage = () => {
  // Function to handle sign-in
  const handleSignIn = () => {
    signIn('google'); // Trigger Google sign-in
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSignIn}
      >
        Sign in with Google
      </Button>
    </main>
  );
};

export default SignInPage;
