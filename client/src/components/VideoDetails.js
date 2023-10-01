import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { Container, Typography, Button } from "@mui/material";
import YouTube from "react-youtube";

function VideoDetails() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // Fetch video data based on videoId (use your backend API endpoint)
    // fetch(`/course/${videoId}`)
    fetch(`/course/1`)
      .then((res) => res.json())
      .then((data) => setVideoData(data))
      .catch((error) => {
        console.error("Error fetching video data: ", error);
      });
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  // Assuming that videos is an array of video objects
  const firstVideo = videoData.videos[0]; // You can access individual videos like this

  // Extract the video ID from the URL
  function getYouTubeVideoId(url) {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null; // Video ID not found
  }

  const videoIdFromUrl = getYouTubeVideoId(firstVideo.url);

  // Limit of 300 characters description
  const limitedDescription =
    firstVideo.description.length > 300 && !showFullDescription
      ? `${firstVideo.description.slice(0, 300)}...`
      : firstVideo.description;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {videoData.title}
      </Typography>

      <div className="video-container">
        {/* Video Player */}
        <YouTube
          videoId={videoIdFromUrl} // Use the extracted video ID
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
          {firstVideo.description.length > 300 && !showFullDescription && (
            <Button
              color="primary"
              onClick={() => setShowFullDescription(true)}
            >
              Read more...
            </Button>
          )}
          {firstVideo.description.length > 300 && showFullDescription && (
            <Button
              color="primary"
              onClick={() => setShowFullDescription(false)}
            >
              Show less
            </Button>
          )}
        </Typography>
      </div>
    </Container>
  );
}

export default VideoDetails;