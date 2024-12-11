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
      alignItems: "center", // Center horizontally
      height: "20%", // Full viewport height
      bgcolor: "background.paper",
      boxShadow: 3,
      borderRadius: 2,
      p: 3,
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