"use client";

import { Button, Container, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub icon
import { googleTheme, githubTheme } from "../theme/theme"; // Adjusted path to the theme file

export default function SignUpView() {
  const google = googleTheme; // Access the Google theme
  const github = githubTheme; // Access the GitHub theme

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        sx={{
          mb: 1,
          borderColor: google.palette.primary.main,
          color: google.palette.primary.main,
          "&:hover": {
            backgroundColor: google.palette.primary.light,
            borderColor: google.palette.primary.main,
            color: google.palette.common.white, // Set text color to white on hover
          },
        }}
      >
        Registrovať sa účtom Google
      </Button>

      {/* GitHub Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        onClick={() => signIn("github")}
        sx={{
          mb: 1,
          borderColor: github.palette.primary.main,
          color: github.palette.primary.main,
          "&:hover": {
            backgroundColor: github.palette.primary.light,
            borderColor: github.palette.primary.main,
            color: github.palette.common.white, // Set text color to white on hover
          },
        }}
      >
        Registrovať sa účtom GitHub
      </Button>
    </Container>
  );
}
