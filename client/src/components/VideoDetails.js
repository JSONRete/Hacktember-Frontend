import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { Container, Typography, Button } from "@mui/material";

function VideoDetails() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);

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

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {videoData.title}
      </Typography>

      {/* Video Player */}
      <div className="w-full h-0 pb-9/16 relative">
        {/* You can embed your video player here */}
        <iframe
          src={firstVideo.url} // Access the URL of the first video
          title={firstVideo.title} 
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description Box */}
      <div className="border border-black p-4 mt-4">
        <Typography variant="subtitle1">
          {firstVideo.creator}
        </Typography>

        <Button variant="contained" color="primary">
          Save
        </Button>

        <Typography variant="body1" className="mt-2">
          {firstVideo.description}
        </Typography>
      </div>
    </Container>
  );
}

export default VideoDetails;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { BsPlayFill } from "react-icons/bs";

// import React from "react";
// import { useParams } from "react-router-dom";
// import { BsPlayFill } from "react-icons/bs";

// function VideoDetails() {
//   //   const { videoId } = useParams();

//   const videoData = {
//     title: "Learning Python 1-2-3",
//     author: "@bkristastucchio",
//     description: "Python learning program for brand-new programmers.",
//     creatorName: "Squidward Bellbottom",
//     videoThumbnail: "/YouTube-Thumbnail-Size-Graphic.webp",
//   };

//   fetch('/course/1')
//   .then(res => res.json())
//   .then(data=> console.log(data))

//   return (
//     <div>
//       <div className="container mx-auto mt-10">
//         <div className="flex justify-center">
//           <div className="w-full max-w-xl">
//             <div className="mb-5">
//               <h2 className="text-4xl font-bold">{videoData.title}</h2>
//               <p className="text-lg text-gray-600">{videoData.author}</p>
//             </div>
//             <div className="relative">
//               {/* Video Thumbnail  */}
//               <div
//                 className="w-full h-0 pb-9/16 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${process.env.PUBLIC_URL}${videoData.videoThumbnail})`,
//                 }}
//               ></div>
//               {/* Description Sction */}
//               <div className="border border-black p-4 mt-4">
//                 <div className="flex items-center justify-between">
//                   <p className="text-lg font-semibold">
//                     {videoData.creatorName}
//                   </p>
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Save
//                   </button>
//                 </div>
//                 <p className="mt-2">{videoData.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoDetails;
