import Link from "next/link";
import { useRouter } from "next/router";
import Button from "components/Button";
import ReactPlayer from "react-player/vimeo";
import React from "react";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="master-container">
        <div className="cover">
          <img
            className="cover-logo"
            src="/never-die-young-logo-lessOrnate2.svg"
          />
        </div>
        <div className="content">
          <a href="/upcoming" className="frontpage-ticket-link">
            - GET TICKETS -
          </a>

          <div className="tile tile1">
            <div id="dave_tim2" className="img-tile inner-tile" />
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                The premier James Taylor tribute band in Southern California.
              </p>
            </div>
          </div>
          {/*Video Tile */}
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

          <div className="tile tile2">
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                Professional music by professional musicians. Cali grown.
              </p>
              <p className="text-tile-text-minor">
                Learn more about the group of lifetime musicians behind Never
                Die Young:
              </p>
              <Button onClick={() => router.push("/about")}>- About - </Button>
            </div>
            <div id="cali" className="img-tile inner-tile" />
          </div>
          <div className="tile tile1">
            <div
              id="group1"
              className="img-tile inner-tile vertical-tile-image"
            />
            <div className="text-tile inner-tile vertical-tile-text">
              <p className="text-tile-text-emp">
                Perfect for your event, both business and personal.
              </p>
              <p className="text-tile-text-minor">
                Hear what satisfied clients have to say about Never Die Young
              </p>
              <Button onClick={() => router.push("/testimonials")}>
                - Testimonials -
              </Button>
            </div>
          </div>
          <div className="tile tile2">
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                Contact for more details, quotes, and availabilty!
              </p>
              <Button onClick={() => router.push("/contact")}>
                - Contact -
              </Button>
            </div>
            <div id="guitar-closeup" className="img-tile inner-tile" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
