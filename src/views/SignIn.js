import * as React from 'react';
import { useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import styles from "../styles/loginStyles"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../images/logo.png"
import {signIn} from '../services/BackendService'
import { useHistory } from 'react-router';

const theme = createTheme();
const useStyles = makeStyles(styles)
export default function SignIn() {
  const history=useHistory()
  const classes = useStyles()
  const [emailValidation, setEmailValidation] = useState(true)
  const [passwordValidation, setPasswordValidation] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(data.get('email')) === false) {
      setEmailValidation(false)
    } else {
      setEmailValidation(true)
    }
    /.{8,}/.test(data.get('password')) ? setPasswordValidation(true) : setPasswordValidation(false);

    if(emailValidation && passwordValidation){
    signIn({
      email: data.get('email'),
      password: data.get('password'),
    }).then(res=>{
      history.push('/animes')
    })
    .catch(err=>{
      console.log(err);
    })
    }

  };

  return (
    <Grid container className={classes.signinPage}>

      <Grid item className={classes.signinContainer}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs"   >
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
              <Typography component="h1" variant="h5" color="white" >
                Sign In
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  error={!emailValidation}
                  required
                  fullWidth
                  helperText={!emailValidation && "Invaild Email"}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color="primary"
                  className={classes.root}
                  inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  margin="normal"
                  error={!passwordValidation}
                  required
                  fullWidth
                  helperText={!passwordValidation && "Invaild password"}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className={classes.root}
                  inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                  InputLabelProps={{ style: { color: "white" } }}
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
                  <Grid item container justifyContent="flex-end">
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
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