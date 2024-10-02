// src/app/prispevok/[id]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata= {title: 'Detail Prispevkov | ZoskaSnap'}

export default function PrispevokID({params}: {
  params: {
    prispevokId: string;
  }

}){
  return (
      <Typography> prispevok {params.prispevokId}</Typography>
  );
}