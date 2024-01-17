import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* Your Navbar content goes here */}
          <div>Navbar Content</div>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="GIF"
          height="140"
          image={bgGif}
        />
        <Button className={classes.button} variant="contained" color="primary">
          Your Button
        </Button>
      </Card>
      <div className={classes.imageContainer}>
        {/* Replace these placeholder images with your actual image URLs */}
        <img className={classes.image} src="image1.jpg" alt="Image 1" />
        <img className={classes.image} src="image2.jpg" alt="Image 2" />
        <img className={classes.image} src="image3.jpg" alt="Image 3" />
      </div>
    </div>
  );
};

export default HomePage;
