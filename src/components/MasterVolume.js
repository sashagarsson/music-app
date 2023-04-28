import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


// Need to pass props here to make isOnline and setIsOnline work in App.js
export default function MasterVolume(props) {



const handleChange = (event, newValue) => {
    props.setChangeVolume(newValue)
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Master Volume
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Overrides all other sound settings in this application
        </Typography>

      </CardContent>
      <CardActions>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">

        <Slider aria-label="Volume" value={props.changeVolume} onChange={handleChange} />

        </Stack>
      </Box>
      </CardActions>
     
    </Card>
  );
}