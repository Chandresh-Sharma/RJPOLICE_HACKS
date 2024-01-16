import React from 'react';
import { Container, CssBaseline, Typography, TextField, Link, Button, makeStyles } from '@material-ui/core';
import useStyles from './styles';


const AuthPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.signin}>
        <Typography variant="h4" align="center" className={classes.title}>
          Sign In
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            fullWidth
            required
            label="Username"
          />
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            required
            label="Password"
          />
          <Link href="#" className={classes.link}>
            Forgot Password
          </Link>
          <Link href="#" className={classes.link} style={{ fontWeight: 600 }}>
            Request Account
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submitButton}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AuthPage;
