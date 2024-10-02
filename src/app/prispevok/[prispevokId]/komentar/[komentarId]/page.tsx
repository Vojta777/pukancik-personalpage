// src/app/prispevok/[prispevokId]/komentar/komentarId/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata= {title: 'Detail Komentar | ZoskaSnap'}

export default function KomentarId({params}: {
  params: {
    prispevokId: string;
    komentarId: string;
  }

}){
  return (
    <Container>
      <Typography> koment cislo: {params.komentarId} od prispevku s cislom: {params.prispevokId} </Typography>
    </Container>
  );
}