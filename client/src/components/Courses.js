import React, { useState, useContext } from "react";
import ChatBot from "../components/ChatBot";
import { ContentContext } from "../context/ContentProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsPlayFill } from "react-icons/bs";

export default function CourseCatalog() {
  const { course, handleCourse } = useContext(ContentContext);
  const [difficulty, setDifficulty] = useState("");

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    const filteredCourses = course.filter(
      (course) => course.difficulty === selectedDifficulty
    );
    handleCourse(filteredCourses);
  };

  return (
    <div>
      <h1 className="font-display text-4xl mb-5 mt-20 ml-25">Course Catalog</h1>
      <div style={{ display: "block", position: "relative" }}>
        <ChatBot />
      </div>
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
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList sx={{ width: 1000, height: 950 }}>
          {course
            .filter((item) => item.difficulty === difficulty)
            .map((item) => (
              <ImageListItem
                key={item.course_image}
                sx={{ marginX: 2, width: 450, height: 200 }}
              >
                <img
                  srcSet={`${item.course_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.course_image}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{ marginY: 5 }}
                  title={
                    <span>
                      {item.title} | Creator: {item.creator}
                    </span>
                  }
                  subtitle={item.description}
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
    </div>
  );
}
