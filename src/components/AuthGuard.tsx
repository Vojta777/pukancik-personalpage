//src\components\AuthGuard.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react"; // Import useCallback to memoize redirectToAuthPage
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession(); // Removed unused `session` variable
  const router = useRouter();

  const redirectToAuthPage = useCallback(() => {
    if (status === "unauthenticated") {
      router.push("/auth/registracia"); // Redirect to auth/registracia
    }
  }, [status, router]); // Memoize the function with `useCallback` to prevent re-creation

  useEffect(() => {
    redirectToAuthPage();
  }, [redirectToAuthPage]); // Add `redirectToAuthPage` to the dependency array

  const renderLoadingSpinner = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <CircularProgress />
    </Box>
  );

  if (status === "loading") {
    return renderLoadingSpinner(); // Show loading spinner while checking session
  }

  return <>{children}</>;
};

export default AuthGuard;
