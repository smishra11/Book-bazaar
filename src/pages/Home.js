import React, { useState } from "react";
import Navbar from "../components/Common/Navbar";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Paper,
  Card,
  Avatar,
} from "@mui/material";
import homeImg from "../Assets/home.jpg";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sampleData } from "../Data";
import BookCard from "../components/Common/BookCard";
import avatar1 from "../Assets/avatar_1.jpg";
import avatar2 from "../Assets/avatar_2.jpg";
import avatar3 from "../Assets/avatar_3.jpg";
import avatar4 from "../Assets/avatar_4.jpg";
import avatar5 from "../Assets/avatar_5.jpg";
import avatar6 from "../Assets/avatar_6.jpg";
import Footer from "../components/Common/Footer";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CompareIcon from "@mui/icons-material/Compare";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import StyleIcon from "@mui/icons-material/Style";
import SharePage from "../components/Common/SharePage";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar count={count} setCount={setCount} />
      <Container maxWidth="xl">
        <Grid container sx={{ height: "calc(100vh - 45px)" }}>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                One stop for book all purchases
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
                50% off for your first shopping
              </Typography>
              <Typography variant="h5">Specially curated books, just for you</Typography>
              <Typography variant="h5">Best selling books are on sale</Typography>
              <Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontSize: 18,
                    minWidth: 150,
                    borderRadius: 2,
                    mt: 3,
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={homeImg} alt="" height={500} width={500} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "#F6F9FC", py: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  height: 90,
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Grid container sx={{ height: "100%" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>Fast delivery</Typography>
                    <Typography color="textSecondary">Starts from ₹249</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  height: 90,
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Grid container sx={{ height: "100%" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SavingsOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>Money Guarantee</Typography>
                    <Typography color="textSecondary">7 Days back</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  height: 90,
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Grid container sx={{ height: "100%" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AccessTimeOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>365 Days</Typography>
                    <Typography color="textSecondary">For free return</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  height: 90,
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Grid container sx={{ height: "100%" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PaymentsOutlinedIcon fontSize="large" />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>Payment</Typography>
                    <Typography color="textSecondary">Secure system</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 5 }}>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <WorkspacePremiumIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>Best Seller</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>Award Winners</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AutoStoriesIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>New Arrivals</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CompareIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>Fictions Books</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyleIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>Tarot Cards</b>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LocalConvenienceStoreIcon sx={{ fontSize: 80, mb: 2 }} color="primary" />
              <Typography color="primary">
                <b>Today's Deal</b>
              </Typography>
            </Grid>
          </Grid>

          {/* flash deals */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 10,
              pb: 3,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BoltOutlinedIcon color="error" fontSize="large" />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Flash Deals
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowRightIcon fontSize="large" />}
              sx={{ textTransform: "none" }}
            >
              View all
            </Button>
          </Box>
          <Grid container spacing={5}>
            {sampleData.map((data, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={data.name}
                sx={{ display: i <= 3 ? "block" : "none" }}
              >
                <BookCard
                  data={data}
                  showDiscount={true}
                  count={count}
                  setCount={setCount}
                />
              </Grid>
            ))}
          </Grid>

          {/* New arrival */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 7,
              pb: 3,
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              New Arrivals
            </Typography>
            <Button
              endIcon={<ArrowRightIcon fontSize="large" />}
              sx={{ textTransform: "none" }}
            >
              View all
            </Button>
          </Box>
          <Grid container spacing={5}>
            {sampleData.map((data, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={data.name}
                sx={{ display: i >= 4 && i <= 7 ? "block" : "none" }}
              >
                <BookCard data={data} count={count} setCount={setCount} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* featured authors */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <Typography align="center" variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Featured Authors
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
                <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>Remy Sharp</Typography>
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
                <Avatar alt="John Doe" src={avatar2} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>John Doe</Typography>
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
                <Avatar alt="Sharp" src={avatar3} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>Sharp</Typography>
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
                <Avatar alt="Remy" src={avatar4} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>Remy</Typography>
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
                <Avatar alt="Willioms" src={avatar5} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>Willioms</Typography>
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
                <Avatar alt="James" src={avatar6} sx={{ width: 120, height: 120 }} />
                <Typography sx={{ color: "white", mt: 1 }}>James</Typography>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <SharePage />
      <Footer />
    </>
  );
}

export default Home;
