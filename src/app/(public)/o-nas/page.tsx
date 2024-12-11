// src/app/o-nas/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"; // Import Box for grouping elements

export const metadata = { title: 'O nas | ZoskaSnap' };

export default function About() {
  return (
    <Container>
      <Box>
        <Typography variant="h4">Stránka o nás</Typography> {/* Added a variant for styling */}
        <Typography variant="body1" sx={{ mt: 2 }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Naša Facebook stránka
          </a>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <a href="https://zochova.sk/" target="_blank" rel="noopener noreferrer">
            Naša školská stránka
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
