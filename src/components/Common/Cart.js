import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box, IconButton, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Cart({ cartOpen, setCartOpen }) {
  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      PaperProps={{ style: { borderRadius: "16px 0 0 16px" } }}
    >
      <Box sx={{ width: 350 }}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon sx={{ mr: 1 }} />5 items
          </Typography>
          <IconButton onClick={() => setCartOpen(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ overflowY: "auto", height: "calc(100vh - 200px)" }}>
          {[1, 2, 3, 4, 5].map((dt) => (
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src="" alt="" height={50} width={35} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body2">
                    <b>Test name</b>
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    ₹ 299 x 1
                  </Typography>
                  <Typography variant="body2" color="primary">
                    <b>₹ 299</b>
                  </Typography>
                </Box>
              </Box>
              <IconButton size="small">
                <CloseOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" fullWidth sx={{ textTransform: "none" }}>
            Checkout Now
          </Button>
          <Button variant="outlined" fullWidth sx={{ mt: 2, textTransform: "none" }}>
            View Cart
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
