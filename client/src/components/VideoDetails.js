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

function VideoDetails() {
  const { videoId } = useParams();
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
    // fetch(`/course/${videoId}`)
    fetch(`/course/1`)
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
  }, [videoId, showFullDescription]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

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
      <div className="description-container border-2 border-slate-900 px-4 py-2">
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
        <Typography variant="h5" gutterBottom>
          Next in this series...
        </Typography>
        <div className="video-list">
          {videoData.videos.map((video, index) => (
            <Card
              key={video.id}
              className="video-card"
              onClick={() => handleThumbnailClick(index)}
              style={{ cursor: "pointer" }}
            >
              {/* Thumbnail */}
              <img
                src={video.pic}
                alt={video.title}
                className="video-thumbnail"
              />
              <CardContent>
                <Typography variant="subtitle1">{video.title}</Typography>
                <Typography variant="body2">{video.creator}</Typography>
                <Typography variant="body2">{video.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default VideoDetails;
