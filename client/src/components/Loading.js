import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress'
import Typography from '@mui/material/Typography';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh', // Ensures the content is vertically centered on the page
};

const Loading = () => {
  return (

  <div style={containerStyle}>
    <CircularProgress
    color="neutral"
    determinate={false}
    size="lg"
    value={25}
    variant="solid"
    />
    <Typography variant="body1" color="textSecondary">
    Loading...
    </Typography>
</div>
  )
}

export default Loading