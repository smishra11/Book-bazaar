import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Grid,
  Rating,
  Button,
  Divider,
  Box,
  Avatar,
} from "@mui/material";
import moment from "moment";

function BookDetails({ open, setOpen, clickedBook, setClickedBook }) {
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      onClose={() => {
        setOpen(false);
        setClickedBook(null);
      }}
      open={open}
    >
      <DialogContent sx={{ padding: "30px 16px !important" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={clickedBook.image} alt="" height={400} width={300} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">
              <b>{clickedBook.name}</b>
            </Typography>
            <Typography sx={{ mt: 5 }}>
              <b>Author</b> : {clickedBook.author}
            </Typography>
            <Typography sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <b>Rating </b> :
              <Rating size="small" name="read-only" value={4} readOnly sx={{ ml: 1 }} />
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <b>Release date</b> : {moment(clickedBook.release_date).format("lll")}
            </Typography>
            <Typography sx={{ mt: 1, mb: 5 }}>
              <b>Description</b> : {clickedBook.description}
            </Typography>
            <Typography variant="h5" color="primary">
              <b>₹ {clickedBook.price}</b>
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none", borderRadius: 2, mt: 3, mb: 1 }}
            >
              Add To Cart
            </Button>
            <Typography sx={{ mt: 1 }}>
              <b>Sold by</b> : Book store
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 5, mb: 3 }} />
        <Box>
          <Typography variant="h6">
            <b>Reviews ({clickedBook.reviews.length})</b>
          </Typography>
          {clickedBook?.reviews?.length ? (
            <>
              {clickedBook.reviews.map((data) => (
                <Box key={data.id}>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
                    <Avatar sx={{ mr: 2 }}>{data.user.charAt(0)}</Avatar>
                    <Box>
                      <Typography>
                        <b>{data.user}</b>
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating
                          size="small"
                          name="read-only"
                          value={data.rating}
                          readOnly
                        />
                        <Typography sx={{ ml: 1, mr: 3 }}>
                          <b>{data.rating}</b>
                        </Typography>
                        <Typography color="textSecondary">2 years ago</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 1 }} color="textSecondary">
                    {data.comment}
                  </Typography>
                </Box>
              ))}
            </>
          ) : (
            <Typography sx={{ mt: 3 }} color="textSecondary" align="center">
              No reviews found !
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default BookDetails;
