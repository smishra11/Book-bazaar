import React, { useState } from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { sampleData } from "../Data";
import BookCard from "../components/Common/BookCard";
import SharePage from "../components/Common/SharePage";

function Books() {
  const [value, setValue] = useState("All");
  const options = [
    { label: "All" },
    { label: "Harris J. Blake" },
    { label: "Author 1" },
    { label: "Author 1" },
    { label: "Author 2" },
    { label: "Author 3" },
    { label: "Author 4" },
    { label: "Author 5" },
    { label: "Author 6" },
    { label: "Author 7" },
    { label: "Author 8" },
    { label: "Author 9" },
    { label: "Author 10" },
    { label: "Author 11" },
    { label: "Author 12" },
    { label: "Author 13" },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ background: "#F6F9FC", pt: 5, pb: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Breadcrumbs>
              <Link underline="hover" href="/" variant="h6">
                Home
              </Link>
              <Typography variant="h6">Books</Typography>
            </Breadcrumbs>
            <Autocomplete
              disablePortal
              options={options}
              defaultValue={value}
              sx={{ width: 150, fontSize: 10 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Author" />}
            />
          </Box>
          <Grid container spacing={5}>
            {sampleData.map((data) => (
              <Grid item xs={12} sm={4} md={3} key={data.name}>
                <BookCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <SharePage />
      <Footer />
    </>
  );
}

export default Books;
