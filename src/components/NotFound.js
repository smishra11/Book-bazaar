import React from "react";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { Box, Link, Typography } from "@mui/material";

function NotFouund() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 100, color: "grey" }} />
      <Typography variant="h1" sx={{ fontWeight: 700 }} color="textSecondary">
        404
      </Typography>
      <Typography>Sorry, we couldn't find the page.</Typography>
      <Typography>
        You can find other things in <Link href="/">home page</Link>.
      </Typography>
    </Box>
  );
}

export default NotFouund;
