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
  const [value, setValue] = useState({ label: "All", value: "All" });
  const [filteredData, setFilteredData] = useState(sampleData);
  const [count, setCount] = useState(0);

  const options = [
    { label: "All", value: "All" },
    { label: "Harris J. Blake", value: "Harris J. Blake" },
    { label: "Author 1", value: "Author 1" },
    { label: "Author 1", value: "Author 2" },
    { label: "Author 2", value: "Author 3" },
    { label: "Author 3", value: "Author 4" },
    { label: "Author 4", value: "Author 5" },
    { label: "Author 5", value: "Author 6" },
    { label: "Author 6", value: "Author 7" },
    { label: "Author 7", value: "Author 8" },
    { label: "Author 8", value: "Author 8" },
    { label: "Author 9", value: "Author 9" },
    { label: "Author 10", value: "Author 10" },
    { label: "Author 11", value: "Author 11" },
    { label: "Author 12", value: "Author 12" },
    { label: "Author 13", value: "Author 13" },
  ];

  const handleChange = (e, val) => {
    if (val.value === "All") {
      setFilteredData(sampleData);
    } else {
      let filtered = sampleData.filter((data) => data.author === val.value);
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <Navbar count={count} setCount={setCount} />
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
              disableClearable
              options={options}
              defaultValue={value.value}
              sx={{ width: 150, fontSize: 10 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Author" />}
              onChange={handleChange}
            />
          </Box>
          <Grid container spacing={5}>
            {filteredData.map((data) => (
              <Grid item xs={12} sm={4} md={3} key={data.id}>
                <BookCard data={data} count={count} setCount={setCount} />
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
