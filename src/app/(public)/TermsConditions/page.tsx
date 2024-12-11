"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function TermConditions() {
  const router = useRouter();

  return (
    <Container sx={{ mt: 5, p: 3, bgcolor: "background.paper", boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Podmienky používania
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Tieto podmienky používania upravujú pravidlá a podmienky používania našej aplikácie ZoskaSnap. Používaním tejto aplikácie súhlasíte s týmito podmienkami. Ak nesúhlasíte s niektorou časťou týchto podmienok, prosím, prestaňte používať našu aplikáciu.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Používanie aplikácie
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Používateľ sa zaväzuje používať aplikáciu len v súlade s platnými zákonmi a na účely, ktoré nie sú v rozpore s verejným poriadkom alebo dobrými mravmi. Zakazuje sa zneužívať aplikáciu na nelegálne účely alebo šírenie škodlivého obsahu.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Zodpovednosť
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        ZoskaSnap nenesie zodpovednosť za akékoľvek škody spôsobené používaním aplikácie. Používateľ používa aplikáciu na vlastnú zodpovednosť a zaväzuje sa chrániť svoje prihlasovacie údaje pred zneužitím.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Zmeny v podmienkach používania
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Vyhradzujeme si právo kedykoľvek aktualizovať tieto podmienky používania. Odporúčame pravidelne kontrolovať túto stránku, aby ste boli informovaní o prípadných zmenách.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Kontakt
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Ak máte akékoľvek otázky týkajúce sa týchto podmienok používania, kontaktujte nás na <a href="mailto:support@zoskasnap.com">support@zoskasnap.com</a>.
      </Typography>
  
      <Button variant="outlined" sx={{ mt: 4 }} onClick={() => router.back()}>
        Späť
      </Button>

      <Typography variant="body2" sx={{ mt: 5, color: "text.secondary" }}>
        Táto stránka bola naposledy aktualizovaná 11. decembra 2024.
      </Typography>
    </Container>
  );
}