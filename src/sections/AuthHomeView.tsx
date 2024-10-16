// src/sections/AuthHomeView.tsx

import React from 'react';
import { Session } from 'next-auth'; // Import the Session type

interface AuthHomeViewProps {
  session: Session | null; // Define the type for session
}

const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session }) => {
  return (
    <main>
      <h1>Welcome back, {session?.user?.name}!</h1>
      <p>This is your personalized homepage.</p>
      {/* Add more content or components as needed */}
    </main>
  );
};

export default AuthHomeView;
