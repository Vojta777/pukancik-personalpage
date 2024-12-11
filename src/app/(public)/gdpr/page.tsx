"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function GDPR() {
  const router = useRouter();

  return (
    <Container sx={{ mt: 5, p: 3, bgcolor: "background.paper", boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Stránka s GDPR informáciami
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        V rámci našej aplikácie ZoskaSnap dodržiavame všetky príslušné nariadenia o ochrane osobných údajov podľa všeobecného nariadenia o ochrane údajov (GDPR). Táto stránka poskytuje informácie o tom, ako spracovávame a chránime vaše údaje.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Aké údaje zhromažďujeme
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Zhromažďujeme iba údaje, ktoré sú potrebné na poskytovanie našich služieb, ako napríklad meno, e-mailovú adresu a údaje o používaní aplikácie. Tieto údaje sa spracovávajú výlučne s vaším súhlasom.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Ako chránime vaše údaje
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Vaše údaje sú chránené prostredníctvom šifrovania, zabezpečených serverov a prísnych interných pravidiel. Prístup k vašim údajom majú iba autorizované osoby.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Vaše práva
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Máte právo na prístup k vašim údajom, ich opravu, vymazanie alebo obmedzenie spracovania. V prípade otázok alebo požiadaviek nás môžete kontaktovať na <a href="mailto:support@zoskasnap.com">support@zoskasnap.com</a>.
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