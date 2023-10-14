import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, Button, Chip, Paper, Rating, Typography } from "@mui/material";

function BookCard({ data, showDiscount }) {
  return (
    <Paper
      sx={{
        height: 320,
        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          height: "65%",
          objectFit: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img src={data.image} alt={data.name} width="55%" height="90%" />
        {showDiscount ? (
          <Chip
            label={`${Math.floor(Math.random() * 16) + 10}% off`}
            size="small"
            sx={{ position: "absolute", top: 0, left: 0 }}
            color="error"
          />
        ) : null}
      </Box>
      <Box
        sx={{
          height: "35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600 }} variant="body2">
          {data.name}
        </Typography>
        <Rating name="read-only" value={4} readOnly sx={{ py: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="primary" variant="body2">
            ₹ {data.price}{" "}
            <span
              style={{
                color: "grey",
                textDecoration: "line-through",
                marginLeft: "1rem",
              }}
            >
              ₹ 1199
            </span>
          </Typography>
          <Button variant="outlined" size="small">
            <AddOutlinedIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default BookCard;
