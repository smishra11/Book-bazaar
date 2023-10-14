import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Box, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import github from "../../Assets/github.png";

function Footer() {
  const handleClick = (name) => {
    if (name === "github") {
      window.open("https://github.com/smishra11", "_blank");
    } else {
      window.open("https://www.linkedin.com/in/subhasish-mishra17/", "_blank");
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: { xs: "block", sm: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          Developed with
          <FavoriteOutlinedIcon fontSize="small" color="error" sx={{ px: 0.5 }} />& Care
          by Subhasish
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LinkedInIcon
          fontSize="large"
          sx={{ color: "#0a66c2", cursor: "pointer", mr: 2 }}
          onClick={() => handleClick("linkedin")}
        />
        <img
          src={github}
          alt="github"
          height={30}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick("github")}
        />
      </Box>
    </Container>
  );
}

export default Footer;
