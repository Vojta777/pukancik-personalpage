// SignInUpViewLink.tsx
"use client";

import Link from "next/link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const SignInUpViewLink = ({ href, text }: { href: string; text: string }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body2"
      component={Link}
      href={href}
      sx={{
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default SignInUpViewLink;
