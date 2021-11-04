const upcomingDates = [
  {
    showTitle: "Walking Man Tribute: A Salute to James Taylor",
    showDate: "October 6 through 27, 2021",
    showTime: "Wednesdays at 7pm",
    location: "Welk Resort Theatre Escondido, CA",
    ticketLink:
      "https://sandiegotickets.welkresorts.com/eventperformances.asp?evt=40",
  },
];

const Home = () => (
  <div className="page-content">
    <div className="page-title"> Upcoming Shows </div>
    <div className="content">
      <div className="upcoming-container">
        {upcomingDates.map((upcomingDate) => (
          <div className="upcoming-item" key={upcomingDate}>
            <div className="showtitle upcoming-item-info">
              {" "}
              {upcomingDate.showTitle}{" "}
            </div>
            <div className="upcoming-item-info"> {upcomingDate.showDate} </div>
            <div className="upcoming-item-info"> {upcomingDate.showTime} </div>
            <div className="upcoming-item-info"> {upcomingDate.location} </div>
            <a
              href={upcomingDate.ticketLink}
              target="_blank"
              className="ticket-button"
            >
              Tickets
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Home;
