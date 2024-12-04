"use client";

import { Button, Container, Typography, ThemeProvider } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub icon
import { googleTheme, githubTheme } from "../theme/theme"; // Adjusted path to the theme file

export default function SignUpView() {
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

      {/* Google Sign Up with Google theme */}
      <ThemeProvider theme={googleTheme}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
        >
          Registrovať sa účtom Google
        </Button>
      </ThemeProvider>

      {/* GitHub Sign Up with GitHub theme */}
      <ThemeProvider theme={githubTheme}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={() => signIn("github")}
        >
          Registrovať sa účtom GitHub
        </Button>
      </ThemeProvider>
    </Container>
  );
}
