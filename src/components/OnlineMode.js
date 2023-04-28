import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Mode' } };


// Need to pass props here to make isOnline and setIsOnline work in App.js
export default function OnlineMode(props) {
  

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Online Mode
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Is this application connected to the internet?
        </Typography>

      </CardContent>
      <CardActions>
        {/* !isOnline allows you to toggle back and forth */}
      <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)}/>
      </CardActions>
     
    </Card>
  );
}