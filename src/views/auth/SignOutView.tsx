// SignOutView.tsx
"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const SignOutView = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={() => signOut()}
      sx={{
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
        "&:hover": {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.contrastText,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SignOutView;