// src/views/GDPRView.tsx
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GDPRView = () => {
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
        GDPR Compliance
      </Typography>
      <Typography variant="body1">
        We are committed to protecting your data in compliance with GDPR regulations.
      </Typography>
    </Box>
  );
};

export default GDPRView;
