import { Container, Grid, Link, Box, Typography, Divider } from "@mui/material";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Container
      sx={{
        pt: 3,
        pb: 3,
        borderBottom: "1px solid #ccc", 
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={4}>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", color: 'primary.main' }}>
            Moto Mania
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/marcas" variant="body2" sx={{ color: 'text.primary', fontSize: "1rem", fontWeight: 'bold', mx: 3 }}>
                Marcas
              </Link>
              <Link href="/accesorios" variant="body2" sx={{ color: 'text.primary', fontSize: "1rem", fontWeight: 'bold', mx: 3 }}>
                Accesorios
              </Link>
              <Link href="/cascos" variant="body2" sx={{ color: 'text.primary', fontSize: "1rem", fontWeight: 'bold', mx: 3 }}>
                Cascos
              </Link>
            </Box>
          </nav>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CartWidget />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
