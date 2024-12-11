// src/views/SearchView.tsx
"use client";

import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SearchView = () => {
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
        Search
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search..."
        fullWidth
        sx={{
          marginBottom: theme.spacing(2),
        }}
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchView;
