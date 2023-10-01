import React, { useState, useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from 'react-router-dom'
import { BsPlayFill } from "react-icons/bs";

export default function CourseCatalog() {
  const { course, handleCourse } = useContext(ContentContext);
  const [difficulty, setDifficulty] = useState("All");

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    const filteredCourses = course.filter(
      (course) => course.difficulty === selectedDifficulty
    );
    handleCourse(filteredCourses);
  };

  const numColumns = course.length >= 4 ? 2 : 1;
  const itemWidth = 950 / numColumns;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
        <div>
          <h1 className="font-display text-6xl mb-5 mt-20 ml-25 mx-20">
            Course Catalog
          </h1>
        </div>
        <div
          className="mb-5 mt-20 ml-25 mx-20"
          style={{ marginLeft: "auto" }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel sx={{ fontSize:22, fontWeight:800 }}color="success" id="demo-simple-select-label">Difficulty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={difficulty}
                label="Difficulty"
                onChange={handleChange}
                variant='filled'
                sx={{ fontSize:18, fontWeight:800 }}
              >
                <MenuItem sx={{ fontSize:18, fontWeight:800 }} value="All">All</MenuItem>
                <MenuItem sx={{ fontSize:18, fontWeight:800 }} value="Beginner">Beginner</MenuItem>
                <MenuItem sx={{ fontSize:18, fontWeight:800 }} value="Intermediate">Intermediate</MenuItem>
                <MenuItem sx={{ fontSize:18, fontWeight:800 }} value="Expert">Expert</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <ImageList
          sx={{
            width: 1000,
            height: "auto",
            flexWrap: "wrap",
            columns: numColumns,
            overflow: 'hidden'
          }}
        >
          {course
            .filter(
              (item) => difficulty === "All" || item.difficulty === difficulty
            )
            .map((item) => (
              <div>
              <ImageListItem
                key={item.course_image}
                sx={{
                  marginX: 2,
                  width: `${itemWidth}px`,
                  height: "auto",
                  marginBottom: 5
                }}
              >
                <Link to={`/course/${item.id}`}>
                <img
                  srcSet={`${item.course_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.course_image}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="hover:opacity-50"
                />
                </Link>
                <ImageListItemBar
                  sx={{ marginBottom: '16px', fontSize:36, fontWeight:700 }}
                  title={
                    <span>
                      {item.title} | Creator: {item.creator}
                    </span>
                  }
                  subtitle={item.description}
                  position="center"
                />
              </ImageListItem>
              </div>
            ))}
        </ImageList>
      </div>
    </>
  );
}
