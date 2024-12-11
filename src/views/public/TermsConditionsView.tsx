// src/views/TermsConditionsView.tsx
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TermsConditionsView = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>
      <Typography variant="body1">
        By using SnapZoška, you agree to our terms and conditions.
      </Typography>
    </Box>
  );
};

export default TermsConditionsView;
