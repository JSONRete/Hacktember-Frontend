import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import YouTube from "react-youtube";
import ChatBot from "../components/ChatBot"

function VideoDetails() {
  const { courseId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [limitedDescription, setLimitedDescription] = useState("");

  function getYouTubeVideoId(url) {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null; // Video ID not found
  }

  useEffect(() => {
    // Fetch video data based on course clicked)
    // fetch(`course/1`) IF LAUNCHING BACKEND WITH PYTHON APP.PY
    // fetch(`http://127.0.0.1:5000/course/1`) IF BACKEND IS FLASK RUN
    fetch(`/course/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoData(data);

        // Set limitedDescription
        if (data && data.videos && data.videos.length > 0) {
          const firstVideo = data.videos[0];
          const initialDescription =
            firstVideo.description.length > 300 && !showFullDescription
              ? `${firstVideo.description.slice(0, 300)}...`
              : firstVideo.description;
          setLimitedDescription(initialDescription);
        }
      })
      .catch((error) => {
        console.error("Error fetching video data: ", error);
      });
  }, [courseId, showFullDescription]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  // console.log(videoData);
  // console.log(videoId)

  // Function to handle thumbnail click and switch the selected video
  const handleThumbnailClick = (index) => {
    setSelectedVideoIndex(index);

    // Update the description based on the selected video's description
    const selectedVideo = videoData.videos[index];
    const updatedDescription =
      selectedVideo.description.length > 300 && !showFullDescription
        ? `${selectedVideo.description.slice(0, 300)}...`
        : selectedVideo.description;
    setLimitedDescription(updatedDescription);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scrolling
    });
  };

  return (
    <div className='container'>
      <div style={{display: 'block', position: 'relative'}}>
        <ChatBot />
      </div>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {videoData.title}
      </Typography>

      <div className="video-container">
        {/* Video Player */}
        <YouTube
          videoId={getYouTubeVideoId(videoData.videos[selectedVideoIndex].url)} // Use the video URL of the selected video top get the ID DOESNT WORK WITH RAW URL
          opts={{
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>

      {/* Description Box */}
      <div
        className="description-container border-2 border-slate-900 px-4 py-2"
        style={{ marginBottom: "80px" }}
      >
        <div className="description-header">
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {videoData.creator}
          </span>
          <div style={{ flex: 1 }}></div>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
        <Typography variant="body1" className="mt-2">
          {limitedDescription}
          {limitedDescription.length > 300 && !showFullDescription && (
            <Button
              color="primary"
              onClick={() => setShowFullDescription(true)}
            >
              Read more...
            </Button>
          )}
          {limitedDescription.length > 300 && showFullDescription && (
            <Button
              color="primary"
              onClick={() => setShowFullDescription(false)}
            >
              Show less
            </Button>
          )}
        </Typography>
      </div>

      {/* Section for other videos */}
      <div>
        <Typography variant="h5" gutterBottom style={{ fontSize: "24px" }}>
          <strong>Lessons in this series...</strong>
        </Typography>
        <div className="video-list">
          {videoData.videos.map((video, index) => (
            <Card
              key={video.id}
              className="video-card"
              onClick={() => handleThumbnailClick(index)}
              style={{ cursor: "pointer", marginBottom: "40px" }}
            >
              {/* Chapter Label */}
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Chapter {index + 1}
              </Typography>

              {/* Thumbnail */}
              <img
                src={video.pic}
                alt={video.title}
                className="video-thumbnail"
              />
              <CardContent>
                {/* Video Title */}
                <Typography variant="subtitle1">
                  <strong>{video.title}</strong>
                </Typography>

                {/* Creator */}
                <Typography variant="body2">{videoData.creator}</Typography>

                {/* Description */}
                <Typography variant="body2">
                  {video.description.length > 300
                    ? `${video.description.slice(0, 300)}...`
                    : video.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
    </div>
  );
}

export default VideoDetails;
