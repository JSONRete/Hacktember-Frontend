import React, { useState, useContext} from "react";
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
  const [difficulty, setDifficulty] = useState("All");

  const handleChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    const filteredCourses = course.filter(
      (course) => course.difficulty === selectedDifficulty
    );
    handleCourse(filteredCourses);
  };

  return (
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
      <h1 className="font-display text-4xl mb-5 mt-20 ml-25 mx-20">Saved Videos</h1>
      </div>
      <div className="mb-5 mt-20 ml-25 mx-20" style={{ marginLeft: "auto" }}>
      <Box sx={{ minWidth: 120 }}>
        
      </Box>
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList sx={{ width: 1000, height: 950 }}>
          {course
            .filter(
              (item) => difficulty === "All" || item.difficulty === difficulty
            )
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
                  className="hover:animate-pulse"
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
      </>
  );
}
