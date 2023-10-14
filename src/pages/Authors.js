import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import SharePage from "../components/Common/SharePage";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Card,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import avatar1 from "../Assets/avatar_1.jpg";
import avatar2 from "../Assets/avatar_2.jpg";
import avatar3 from "../Assets/avatar_3.jpg";
import avatar4 from "../Assets/avatar_4.jpg";
import avatar5 from "../Assets/avatar_5.jpg";
import avatar6 from "../Assets/avatar_6.jpg";
import { sampleData } from "../Data";
import BookCard from "../components/Common/BookCard";

function Authors() {
  const [filteredData, setFilteredData] = useState(sampleData);
  const [clickedAuthor, setClickedAuthor] = useState("none");

  useEffect(() => {
    let filtered;
    if (clickedAuthor === "Harris J. Blake") {
      filtered = sampleData.filter((data) => data.author === "Harris J. Blake");
    } else if (clickedAuthor === "Author 1") {
      filtered = sampleData.filter((data) => data.author === "Author 1");
    } else if (clickedAuthor === "Author 2") {
      filtered = sampleData.filter((data) => data.author === "Author 2");
    } else if (clickedAuthor === "Author 3") {
      filtered = sampleData.filter((data) => data.author === "Author 3");
    } else if (clickedAuthor === "Author 4") {
      filtered = sampleData.filter((data) => data.author === "Author 4");
    } else if (clickedAuthor === "Author 5") {
      filtered = sampleData.filter((data) => data.author === "Author 5");
    } else {
      filtered = sampleData;
    }
    setFilteredData(filtered);
  }, [clickedAuthor]);

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
              <Typography variant="h6">Authors</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ pb: 10 }}>
            <Typography align="center" variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Featured Auther
            </Typography>
            <Card
              elevation={0}
              sx={{
                height: "auto",
                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                background: "#1565c0",
                py: 5,
                px: 2,
              }}
            >
              <Grid container spacing={3} sx={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Harris J. Blake"
                    src={avatar1}
                    sx={{
                      width: clickedAuthor === "Harris J. Blake" ? 114 : 120,
                      height: clickedAuthor === "Harris J. Blake" ? 114 : 120,
                      cursor: "pointer",
                      border:
                        clickedAuthor === "Harris J. Blake" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(
                        clickedAuthor !== "Harris J. Blake" ? "Harris J. Blake" : "none"
                      )
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Harris J. Blake</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Author 1"
                    src={avatar2}
                    sx={{
                      width: clickedAuthor === "Author 1" ? 114 : 120,
                      height: clickedAuthor === "Author 1" ? 114 : 120,
                      cursor: "pointer",
                      border: clickedAuthor === "Author 1" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(clickedAuthor !== "Author 1" ? "Author 1" : "none")
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Author 1</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Author 2"
                    src={avatar3}
                    sx={{
                      width: clickedAuthor === "Author 2" ? 114 : 120,
                      height: clickedAuthor === "Author 2" ? 114 : 120,
                      cursor: "pointer",
                      border: clickedAuthor === "Author 2" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(clickedAuthor !== "Author 2" ? "Author 2" : "none")
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Author 2</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Autho 3"
                    src={avatar4}
                    sx={{
                      width: clickedAuthor === "Author 3" ? 114 : 120,
                      height: clickedAuthor === "Author 3" ? 114 : 120,
                      cursor: "pointer",
                      border: clickedAuthor === "Author 3" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(clickedAuthor !== "Author 3" ? "Author 3" : "none")
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Author 3</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Author 4"
                    src={avatar5}
                    sx={{
                      width: clickedAuthor === "Author 4" ? 114 : 120,
                      height: clickedAuthor === "Author 4" ? 114 : 120,
                      cursor: "pointer",
                      border: clickedAuthor === "Author 4" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(clickedAuthor !== "Author 4" ? "Author 4" : "none")
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Author 4</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Author 5"
                    src={avatar6}
                    sx={{
                      width: clickedAuthor === "Author 5" ? 114 : 120,
                      height: clickedAuthor === "Author 5" ? 114 : 120,
                      cursor: "pointer",
                      border: clickedAuthor === "Author 5" ? "3px solid black" : "none",
                    }}
                    onClick={() =>
                      setClickedAuthor(clickedAuthor !== "Author 5" ? "Author 5" : "none")
                    }
                  />
                  <Typography sx={{ color: "white", mt: 1 }}>Author 5</Typography>
                </Grid>
              </Grid>
            </Card>
          </Box>
          <Grid container spacing={5}>
            {filteredData.map((data) => (
              <Grid item xs={12} sm={4} md={3} key={data.id}>
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

export default Authors;
