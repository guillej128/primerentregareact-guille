import { Box, Container, Typography, List, ListItem } from "@mui/material";

const ItemListContainer = ({ titulo }) => {
  return (
    <Container>
      <Typography variant="h2">
        Motos nuevas
      </Typography>
      <Box sx={{ color: 'error.main' }}>
        <Typography variant="h2">
          {titulo}
        </Typography>
      </Box>
      <List>
        <ListItem>Moto 110cc</ListItem>
        <ListItem>Moto 125cc</ListItem>
        <ListItem>Moto 200cc</ListItem>
      </List>
    </Container>
  );
};

export default ItemListContainer;
