import React from "react";
import {
  Grid,
  Box,
  Button,
  CssBaseline,
  Checkbox,
  Link,
  TextField,
  Typography,
  FormControlLabel,
  Container,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const theme = createTheme();
  const { signin, curUser, token } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await signin(data.get("email"), data.get("password"));
      console.log("I am user login");
      navigate("/");
    } catch (err) {
      console.log(err);
      console.log("Unable to login");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            {JSON.stringify(curUser)}
            {token}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signin;
