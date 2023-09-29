import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import { ErrorContext } from "../context/ErrorProvider";

export default function Filter() {
  const [difficulty, setDifficulty] = useState("");
  const { course, handleCourse } = useContext(ContentContext);

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    const filteredCourses = course.filter(
      (course) => course.difficulty === selectedDifficulty
    );
    handleCourse(filteredCourses);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 250 }}>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={difficulty}
          label="Difficulty"
          onChange={handleChange}
        >
          <MenuItem value='Beginner'>Beginner</MenuItem>
          <MenuItem value='Intermediate'>Intermediate</MenuItem>
          <MenuItem value='Expert'>Expert</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
