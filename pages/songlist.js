const songTitles = [
  "Never Die Young",
  "Walking Man",
  "Carolina in My Mind",
  "Fire and Rain",
  "Sweet Baby James",
  "Country Road",
  "Shower the People",
  "Mexico",
  "Copperline",
  "You Can Close Your Eyes",
  "Something In The Way She Moves",
  "You've Got a Friend",
  "Steamroller",
  "How Sweet It Is To Be Loved By You",
  "Secret of life",
  "Brother Trucker",
  "Up on the Roof",
  "Teach Me Tonight",
  "Smiling Face",
  "Machine Gun Kelly",
  "Don't Let Me Be Lonely",
  "Everyday",
  "River",
  "Junkies Lament",
  "That's Why I'm Here",
  "Wandering",
  "Wichita Lineman",
];

const Home = () => (
  <div className="page-content">
    <div className="page-title"> Song List </div>
    <div className="content">
      <div className="songtitles-container">
        {songTitles.map((title) => (
          <ul className="songtitles" key={title}>
            {title}
          </ul>
        ))}
      </div>
    </div>
  </div>
);
export default Home;
