// src/app/profil/[id]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata= {title: 'Detail Profilu | ZoskaSnap'}

export default function ProfilID({params}: {
  params: {prispevokID: string}
}){
  return (
      <Typography> profil {params.id}</Typography>
  );
}