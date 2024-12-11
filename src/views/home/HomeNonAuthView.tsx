// src/views/HomeNonAuthView.tsx
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HomeNonAuthView = () => {
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
        Welcome to SnapZoška!
      </Typography>
      <Typography variant="body1">
        Please sign in to explore our features.
      </Typography>
    </Box>
  );
};
export default HomeNonAuthView;