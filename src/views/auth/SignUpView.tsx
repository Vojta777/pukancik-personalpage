// src/views/auth/SignUpView.tsx

"use client";

// React imports
import { useState } from "react";

// MUI imports
import Typography from "@mui/material/Typography";
import GoogleSignButton from "./GoogleSignButton";
import GithubSignButton from "./GithubSignButton";

// Custom imports


const SignUpView = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Social Sign-Up Buttons with validation */}
      <GoogleSignButton text="Registrovať sa účtom Google" />
      <GithubSignButton text="Registrovať sa účtom Github" />
    </>
  );
};

export default SignUpView;