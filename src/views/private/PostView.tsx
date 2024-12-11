// src/views/PostView.tsx
"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PostView = ({ title, content }: { title: string; content: string }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {content}
      </Typography>
    </Paper>
  );
};

export default PostView;