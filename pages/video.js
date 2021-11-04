import ReactPlayer from "react-player/vimeo";
import React from "react";

const Home = () => (
  <div className="page-content">
    <div className="page-title"> Video </div>
    <div className="content">
      <div className="tile">
        <div className="" id="video-container">
          <ReactPlayer
            url="https://vimeo.com/637112988"
            width="100%"
            height="100%"
            config={{
              vimeo: {
                playerOptions: {
                  title: true,
                  color: "ffbf60",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
export default Home;
