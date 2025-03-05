"use client";

import { useState } from "react";
import { Button, Container, Typography, Checkbox, FormControlLabel, Link as MuiLink } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import NextLink from "next/link"; // Import Next.js Link

const SignUpView = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSignInWithGoogle = () => {
    if (!isChecked) {
      setErrorMessage("Zaškrtnite prosím pole uvedené nižšie.");
    } else {
      signIn("google");
    }
  };

  const handleSignInWithGitHub = () => {
    if (!isChecked) {
      setErrorMessage("Zaškrtnite prosím pole uvedené nižšie.");
    } else {
      signIn("github");
    }
  };

  // Explicitly typing the event parameter
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setErrorMessage(""); // Clear the error message when checkbox is checked
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally center the container
        alignItems: "center", // Vertically center the container
        minHeight: "100vh", // Ensure the full height of the viewport is used
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          p: 3,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        {/* Logo / Title */}
        <Typography variant="h5" sx={{ mb: 3, color: "text.primary" }}>
          Registrácia
        </Typography>

        {/* Sign-in link */}
        <Typography variant="body1" sx={{ mb: 6, color: "text.secondary" }}>
          Už máte účet?{" "}
          <MuiLink component={NextLink} href="/auth/prihlasenie">
            Prihláste sa
          </MuiLink>
        </Typography>

        {/* Google Sign Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={handleSignInWithGoogle}
          sx={{
            mb: 2,
            borderRadius: 2,
            color: "primary.main",
            borderColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#fff",
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
          onClick={handleSignInWithGitHub}
          sx={{
            mb: 3,
            borderRadius: 2,
            color: "secondary.main",
            borderColor: "secondary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "#fff",
            },
          }}
        >
          Registrovať sa účtom GitHub
        </Button>

        {/* Error message */}
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 1, textAlign: "center" }}>
            {errorMessage}
          </Typography>
        )}

        {/* GDPR and Terms Checkbox */}
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color="primary" />}
          label={
            <Typography variant="body2" color="text.secondary">
              Súhlasím s{" "}
              <MuiLink component={NextLink} href="/gdpr">
                GDPR
              </MuiLink>{" "}
              a{" "}
              <MuiLink component={NextLink} href="/podmienky">
                podmienkami používania
              </MuiLink>
              .
            </Typography>
          }
          sx={{ mt: 2 }}
        />
      </Container>
    </div>
  );
};

export default SignUpView;