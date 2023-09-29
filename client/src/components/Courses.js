import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import { ErrorContext } from "../context/ErrorProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { BsPlayFill } from "react-icons/bs";
import Filter from "./Filter";
import ChatBot from "./ChatBot";

export default function Courses() {
  const { course, setCourse } = useContext(ContentContext);
  const { error } = useContext(ErrorContext);


  return (
    <div>
      <h1 className="font-display text-4xl mb-5 ml-25">Course Catelog</h1>
      <div style={{ display: "block", position: "relative" }}>
        <ChatBot />
      </div>
      <Filter />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList sx={{ width: 1000, height: 950 }}>
          {course.map((item) => (
            <ImageListItem key={item.course_image} sx={{ marginX: 2, width: 450, height: 200 }} >
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
