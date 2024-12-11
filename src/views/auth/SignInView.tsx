// SignInView.tsx
"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const SignInView = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      fullWidth
      onClick={() => signIn()}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SignInView;