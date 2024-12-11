"use client";

import {
  Button,
  Container,
  Typography,
  ThemeProvider,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub icon
import { googleTheme, githubTheme } from "../styles/theme"; // Adjusted path to the theme file

export default function SignUpView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        height: "20%", // Full viewport height
        bgcolor: "background.paper", // Set background color
        boxShadow: 3,
        borderRadius: 2,
        p: 3,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/api/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* GDPR and Terms Agreement */}
      <FormControlLabel
        control={<Checkbox name="gdpr" />}
        label={
          <Typography variant="body1">
            Súhlasím s <a href="/gdpr/">GDPR</a> a <a href="/TermsConditions">Podmienkami používania</a>
          </Typography>
        }
        sx={{ mb: 6 }}
      />

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
