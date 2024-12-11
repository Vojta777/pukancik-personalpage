// src/sections/NonAuthHomeView.tsx

import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography>
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Návšteva našej Facebook stránky
        </a>
      </Typography>

    </Container>
  );
}