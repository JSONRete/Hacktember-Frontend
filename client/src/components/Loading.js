import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress'

const Loading = () => {
  return (
    <CircularProgress
  color="neutral"
  determinate={false}
  size="lg"
  value={25}
  variant="solid"
/>
  )
}

export default Loading