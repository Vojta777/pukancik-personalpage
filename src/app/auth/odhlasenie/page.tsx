"use client"; // This makes the component a client component

import React from 'react';
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react"; // Import the signOut function

const SignOut = () => {
  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(); // Trigger sign-out
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSignOut}
      >
        Log Out
      </Button>
    </main>
  );
};

export default SignOut;
