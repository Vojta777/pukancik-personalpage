// src/views/AboutView.tsx
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutView = () => {
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
        About SnapZoška
      </Typography>
      <Typography variant="body1">
        SnapZoška is a platform created by students to connect people and share ideas.
      </Typography>
    </Box>
  );
};

export default AboutView;
