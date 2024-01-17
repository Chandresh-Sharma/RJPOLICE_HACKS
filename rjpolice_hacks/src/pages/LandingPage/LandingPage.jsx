// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import useStyles from './styles';

// const MapComponent = () => {
//   const classes = useStyles();
//   const [selectedTag, setSelectedTag] = useState('tag1'); // Initial tag value

//   useEffect(() => {
//     // Initialize and configure your Leaflet map here
//     const map = L.map('map').setView([0, 0], 2); // Example default view, adjust as needed
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//   }, []);

//   const search = () => {
//     // Add your search functionality here
//     console.log('Searching...');
//   };

//   const handleTagChange = (event) => {
//     setSelectedTag(event.target.value);
//   };

//   return (
//     <div className={classes.container}>
//       <div className={classes.searchContainer}>
//         <TextField id="searchInput" label="Search..." variant="outlined" />
//         <Button variant="contained" color="primary" onClick={search}>
//           Search
//         </Button>
//       </div>
//       <div className={classes.dropdownContainer}>
//         <FormControl variant="outlined" fullWidth>
//           <InputLabel id="tagSelect-label">Select Tag:</InputLabel>
//           <Select
//             labelId="tagSelect-label"
//             id="tagSelect"
//             value={selectedTag}
//             onChange={handleTagChange}
//             label="Select Tag"
//           >
//             <MenuItem value="tag1">Tag 1</MenuItem>
//             <MenuItem value="tag2">Tag 2</MenuItem>
//             <MenuItem value="tag3">Tag 3</MenuItem>
//             {/* Add more options as needed */}
//           </Select>
//         </FormControl>
//       </div>
//       <div id="map" className={classes.map}></div>
//     </div>
//   );
// };

// export default MapComponent;
