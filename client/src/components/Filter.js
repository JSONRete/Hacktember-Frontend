import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useContext } from 'react';
import { ContentContext } from '../context/ContentProvider';
import { ErrorContext } from '../context/ErrorProvider';


export default function Filter() {
  const [difficulty, setDifficulty] = useState('');
  const { course, handleCourse } = useContext(ContentContext);
  const { error } = useContext(ErrorContext);

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
          {course.map((course) => (
            <MenuItem key={course.id} value={course.difficulty}>
              {course.difficulty}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}