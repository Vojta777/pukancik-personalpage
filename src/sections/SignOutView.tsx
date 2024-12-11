// src/sections/SignOutView.tsx

"use client";

import { signOut } from "next-auth/react";
import { Button, Container, Typography } from "@mui/material";

export default function SignOutView() {
  return (
    <Container
    maxWidth="xs"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Center vertically
      alignItems: "center", // Center horizontally
      bgcolor: "background.paper",
      boxShadow: 3,
      borderRadius: 2,
      p: 3,
      mt: 35,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Naozaj sa chcete odhlásiť?
      </Typography>
      <Button variant="contained" onClick={() => signOut()}>
        Odhlásiť sa
      </Button>
    </Container>
  );
}