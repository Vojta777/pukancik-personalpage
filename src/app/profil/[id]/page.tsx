// src/app/profil/[id]/page.tsx

import Typography from "@mui/material/Typography";

export const metadata= {title: 'Detail Profilu | ZoskaSnap'}

export default function ProfilID({params}: {
  params: {prispevokID: string}
}){
  return (
      <Typography> profil {params.prispevokID}</Typography>
  );
}