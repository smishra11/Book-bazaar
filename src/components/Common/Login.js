import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function Login({ open, setOpen }) {
  return (
    <Dialog maxWidth="xs" fullWidth onClose={() => setOpen(false)} open={open}>
      <DialogTitle align="center">
        <b>Login</b>
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ pt: 2, pb: 0.5 }}>
          <b>Email</b>
        </Typography>
        <TextField placeholder="Enter your email..." fullWidth />
        <Typography sx={{ pt: 2, pb: 0.5 }}>
          <b>Password</b>
        </Typography>
        <TextField placeholder="Enter your password..." fullWidth />
        <FormControl sx={{ py: 2 }}>
          <FormControlLabel
            disabled
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </FormControl>
        <Box sx={{ display: "flex", mb: 3 }}>
          <InfoIcon fontSize="small" color="info" sx={{ mr: 0.5 }} />
          <Typography variant="caption">
            Please use <b style={{ textDecoration: "underline" }}>demo@mishra.com</b> in
            email and <b style={{ textDecoration: "underline" }}>demo1243</b> as password
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Login
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
          <Link variant="caption">Forgot password</Link>
          <Link variant="caption">Don't have an account? Create now</Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Login;
