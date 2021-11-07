import * as React from 'react';
import { useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "../styles/loginStyles"
import logo from "../images/logo.png"
import { useHistory } from 'react-router';
import { signUp } from '../services/BackendService'

const theme = createTheme();
const useStyles = makeStyles(styles)
export default function SignUp() {
  const classes = useStyles()
  const history = useHistory()
  const [emailValidation, setEmailValidation] = useState(true)
  const [passwordValidation, setPasswordValidation] = useState(true)
  const [firstNameValidation, setFirstNameValidation] = useState(true)
  const [lastNameValidation, setLastNameValidation] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    //validation regEx
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(data.get('email')) ?
      setEmailValidation(true) : setEmailValidation(false);
    /.{8,}/.test(data.get('password')) ? setPasswordValidation(true) : setPasswordValidation(false);
    data.get('firstName') === "" ? setFirstNameValidation(false) : setFirstNameValidation(true);
    data.get('lastName') === "" ? setLastNameValidation(false) : setLastNameValidation(true);
    if (emailValidation && passwordValidation && firstNameValidation && lastNameValidation) {
      signUp({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      }).then(res => {
        console.log(res);
        res.status === 201 && history.push('/signin')
      })
        .catch(err => {
          console.log(err);
        })
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <Grid container className={classes.signupPage} >
      <Grid item className={classes.signupContainer}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className={classes.signupContainer}  >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid item container>
                <img src={logo} alt="logo" />
              </Grid>
              <Typography component="h1" variant="h5" color="white">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      error={!firstNameValidation}
                      helperText={!firstNameValidation && "This field is required"}
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      className={classes.root}
                      inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                      InputLabelProps={{ style: { color: "white" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      error={!lastNameValidation}
                      helperText={!lastNameValidation && "This field is required"}
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      className={classes.root}
                      inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                      InputLabelProps={{ style: { color: "white" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      error={!emailValidation}
                      helperText={!emailValidation && "Invaild Email"}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      className={classes.root}
                      inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                      InputLabelProps={{ style: { color: "white" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      error={!passwordValidation}
                      helperText={!passwordValidation && "Invaild password"}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      className={classes.root}
                      inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                      InputLabelProps={{ style: { color: "white" } }}
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      {"Already have an account? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>


    </Grid>

  );
}