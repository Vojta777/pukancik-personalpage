// SignVerifyView.tsx
"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const SignVerifyView = ({ message }: { message: string }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      sx={{
        color: theme.palette.text.primary,
        textAlign: "center",
        marginTop: theme.spacing(2),
      }}
    >
      {message}
    </Typography>
  );
};

export default SignVerifyView;
