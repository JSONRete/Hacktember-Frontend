import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Filter() {
  const [difficulty, setDifficulty] = useState('');

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 250}}>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Difficulty"
          onChange={handleChange}
        >
          <MenuItem value={10}>Beginner</MenuItem>
          <MenuItem value={20}>Intermediate</MenuItem>
          <MenuItem value={30}>Expert</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}