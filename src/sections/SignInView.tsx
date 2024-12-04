"use client";

import { Button, Container, Typography } from "@mui/material"; // Only keep the used imports
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import the GitHub icon
import { googleTheme, githubTheme } from "../theme/theme"; // Correct path to your theme file

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

      {/* Google Sign In */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        sx={{
          mb: 1,
          borderColor: googleTheme.palette.primary.main,
          color: googleTheme.palette.primary.main,
          "&:hover": {
            backgroundColor: googleTheme.palette.primary.light,
            borderColor: googleTheme.palette.primary.main,
            color: googleTheme.palette.common.white, // Use white from the Google theme for hover
          },
        }}
      >
        Prihlásiť sa účtom Google
      </Button>

      {/* GitHub Sign In */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        onClick={() => signIn("github")}
        sx={{
          mb: 1,
          borderColor: githubTheme.palette.primary.main,
          color: githubTheme.palette.primary.main,
          "&:hover": {
            backgroundColor: githubTheme.palette.primary.light,
            borderColor: githubTheme.palette.primary.main,
            color: githubTheme.palette.common.white, // Use white from the GitHub theme for hover
          },
        }}
      >
        Prihlásiť sa účtom GitHub
      </Button>
    </Container>
  );
}
