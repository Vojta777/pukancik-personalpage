"use client"; // Mark this file as a client component

import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "../components/ThemeProvider"; // Custom ThemeProvider hook

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const router = useRouter();
  const { data: session } = useSession(); // Get session data
  const { toggleTheme, isDarkMode } = useTheme(); // Use theme context

  const handleNavigation = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Non-authenticated navigation paths
  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Prispevky", value: "/prispevok", icon: <AddCircleIcon /> },
    { label: "Registrácia", value: "/api/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/api/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Authenticated navigation paths
  const authPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Pridať", value: "/prispevok", icon: <AddCircleIcon /> },
    { label: "Odhlásiť", value: "/api/auth/odhlasenie", icon: <LogoutIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar
          alt={session?.user?.name || "User"}
          src={session?.user?.image || undefined}
        />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
  ];

  // Decide which paths to use based on authentication status
  const navigationPaths = session ? authPaths : nonAuthPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
          />
        ))}
        {/* Theme toggle button (Dark/Light mode) */}
        <Box sx={{ position: "absolute", right: 16 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />} {/* Toggle icons */}
          </IconButton>
        </Box>
      </BottomNavigation>
    </Box>
  );
}
