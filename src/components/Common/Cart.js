import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box, IconButton, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

export default function Cart({ cartOpen, setCartOpen }) {
  const [uniqueItem, setUniqueItem] = useState(null);

  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    const unique = [...new Map(cartData.map((data) => [data.name, data])).values()];
    setUniqueItem(unique);
  }, [cartOpen]);

  const getTotalPrice = () => {
    let cartData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    let total = 0;
    cartData.map((data) => (total = total + data.price));
    return total;
  };

  const [count, setCount] = useState(0);

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
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      PaperProps={{ style: { borderRadius: "16px 0 0 16px" } }}
    >
      <Box sx={{ width: { xs: 300, sm: 350 } }}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon sx={{ mr: 1 }} />
            {uniqueItem?.length ?? 0} item
          </Typography>
          <IconButton onClick={() => setCartOpen(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ overflowY: "auto", height: "calc(100vh - 200px)" }}>
          {uniqueItem?.map((data) => (
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={data.id}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={data.image} alt="" height={70} width={50} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body2">
                    <b>{data.name}</b>
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    ₹ 299 x{" "}
                    {
                      JSON.parse(localStorage.getItem("cartItem") || "[]").filter(
                        (dt) => dt.name === data.name
                      ).length
                    }
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" color="primary">
                      <b>
                        ₹{" "}
                        {data.price *
                          JSON.parse(localStorage.getItem("cartItem") || "[]").filter(
                            (dt) => dt.name === data.name
                          ).length}
                      </b>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton size="small" onClick={() => handleAddToCart(data)}>
                  <AddOutlinedIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption">
                  <b>
                    {
                      JSON.parse(localStorage.getItem("cartItem") || "[]").filter(
                        (bookData) => bookData.name === data.name
                      ).length
                    }
                  </b>
                </Typography>
                <IconButton size="small" onClick={() => decreaseCount(data)}>
                  <RemoveOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" fullWidth sx={{ textTransform: "none" }}>
            Checkout Now ({getTotalPrice()})
          </Button>
          <Button variant="outlined" fullWidth sx={{ mt: 2, textTransform: "none" }}>
            View Cart
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
