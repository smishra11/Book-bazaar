import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, Button, Chip, IconButton, Paper, Rating, Typography } from "@mui/material";
import BookDetails from "./BookDetails";
import moment from "moment";

function BookCard({ data, showDiscount, count, setCount }) {
  const [open, setOpen] = useState(false);
  const [clickedBook, setClickedBook] = useState(null);
  const [showDetailsButton, setShowDetailsButton] = useState(false);

  const handleAddToCart = (book) => {
    let getData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    localStorage.setItem("cartItem", JSON.stringify([...getData, book]));
    setCount(count + 1);
  };

  const decreaseCount = (book) => {
    let getData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    let copyData = [...getData];
    const index = copyData.findIndex((data) => {
      return data.name === book.name;
    });
    copyData.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(copyData));
    setCount(count - 1);
  };

  return (
    <>
      <Paper
        sx={{
          height: 320,
          boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
          borderRadius: 2,
          p: 2,
        }}
        onClick={() => setOpen(true)}
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
          onMouseEnter={(e) => setShowDetailsButton(true)}
          onMouseLeave={(e) => setShowDetailsButton(false)}
        >
          <img src={data.image} alt={data.name} width="55%" height="90%" />
          {showDiscount ? (
            <Chip
              label="10% off"
              size="small"
              sx={{ position: "absolute", top: 0, left: 0 }}
              color="error"
            />
          ) : null}
          {showDetailsButton ? (
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                background: "#eee",
                zIndex: 999,
                opacity: 0.7,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: 5,
                  mb: 1,
                  position: "relative",
                  zIndex: 1,
                }}
                variant="contained"
                size="small"
                onClick={() => setClickedBook(data)}
              >
                <b>View Details</b>
              </Button>
            </Box>
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
          <Typography variant="caption" color="textSecondary">
            by {data.author} | {moment(data.release_date).format("LL")}
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
            {JSON.parse(localStorage.getItem("cartItem") || "[]").filter(
              (bookData) => bookData.name === data.name
            ).length ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                  onClick={() => decreaseCount(data)}
                >
                  <RemoveOutlinedIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 1 }}>
                  <b>
                    {
                      JSON.parse(localStorage.getItem("cartItem") || "[]").filter(
                        (bookData) => bookData.name === data.name
                      ).length
                    }
                  </b>
                </Typography>
                <IconButton
                  size="small"
                  sx={{ background: "#f5f5f5" }}
                  onClick={() => handleAddToCart(data)}
                >
                  <AddOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: "none" }}
                onClick={() => handleAddToCart(data)}
              >
                Add to cart
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
      {clickedBook ? (
        <BookDetails
          open={open}
          setOpen={setOpen}
          clickedBook={clickedBook}
          setClickedBook={setClickedBook}
        />
      ) : null}
    </>
  );
}

export default BookCard;
