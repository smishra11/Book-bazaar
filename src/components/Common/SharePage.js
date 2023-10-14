import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function SharePage() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bookCover.avif')",
        height: 400,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "white" }} variant="h3">
          <b>Share Book Bazaar page</b>
        </Typography>
        <Typography sx={{ color: "white", mb: 3 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eos aut
          provident nam ducimus eveniet maxime reprehenderit amet enim est.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ShareIcon />}
          sx={{ fontSize: 18, borderRadius: 2, textTransform: "none", minWidth: 220 }}
        >
          Share the page
        </Button>
      </Container>
    </Box>
  );
}

export default SharePage;
