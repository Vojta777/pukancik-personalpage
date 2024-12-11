"use client";

import { Button, Container, Typography, ThemeProvider } from "@mui/material"; // Only keep the used imports
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import the GitHub icon
import { googleTheme, githubTheme } from "../styles/theme"; // Correct path to your theme file

export default function SignInView() {
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
        Prihlásiť sa
      </Typography>

      {/* Sign-in link */}
            <Typography variant="body1" sx={{ mb: 6 }}>
        Nemáte ešte účet? <a href="/api/auth/registracia">Registruj sa</a>
      </Typography>

      {/* Google Sign In with Google Theme */}
      <ThemeProvider theme={googleTheme}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
        >
          Prihlásiť sa účtom Google
        </Button>
      </ThemeProvider>

      {/* GitHub Sign In with GitHub Theme */}
      <ThemeProvider theme={githubTheme}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={() => signIn("github")}
        >
          Prihlásiť sa účtom GitHub
        </Button>
      </ThemeProvider>
    </Container>
  );
}
