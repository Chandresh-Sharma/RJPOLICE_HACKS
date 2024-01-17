import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import bgGif from './bg.gif'; // Import the image

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  media: {
    height: 200,
    width: '100%',
    opacity: 0.7,
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  image: {
    width: '30%', // Adjust the width as needed
    borderRadius: theme.spacing(1), // Add border-radius for styling
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Live Camera Hub
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Add camera</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Customer care</Button>
          <Button color="inherit">Explore cameras</Button>
          <Button color="inherit">Setting</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <header>
          <Typography variant="h3">Welcome to our Live Camera Hub</Typography>
          <Typography variant="body1">Explore and monitor live camera feeds securely.</Typography>
        </header>

        <section>
          <Typography variant="h4">Add Camera details</Typography>
          <Button variant="contained" color="primary">Submit camera</Button>
        </section>

        <section>
          <Typography variant="h4">Login</Typography>
          <Button variant="contained" color="primary">Login</Button>
        </section>

        <section>
          <Typography variant="h4">Customer care</Typography>
          <Button variant="contained" color="primary">Call customer care</Button>
        </section>
      </Container>

      <footer>
        <Typography variant="body2">© 2024 Live Camera Hub. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default HomePage;

