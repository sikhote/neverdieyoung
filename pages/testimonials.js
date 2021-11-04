import Carousel from "../components/Carousel";
const testimonials = [
  {
    name: "Danny Reyes/Percussionist, Zach Brown Band",
    text: "The music of James Taylor presented with authenticity and musical brilliance. I’m a big fan! ",
  },
  {
    name: "John Raymond/Guitarist, Kenny G",
    text: "The Real Deal",
  },
  {
    name: "Damian DeRobbio, Belly Up Tavern, Solana Beach, California",
    text: "Never Die Young is an absolute pleasure to witness. Musical Mastery of some of America’s finest songs.",
  },
  {
    name: "Greg Howard, CEO, Carecraft",
    text: "The show was flawless. Each song sounds true to the original; faithfully reproduced from beginning to end. Amazing, I would hire them again without hesitation, and plan to do so.",
  },
  {
    name: "Raffi Simonian",
    text: "You have got to see Never Die Young (the San Diego based James Taylor tribute band). Their performance at the Belly Up in May 2019 was stunningly good. This simply amazing band covers the folk-rock songs from Taylor’s impactful 50 year career that are both gentle & sweet as well as uplifting. If you want to see a great show that will trigger your most beautiful and emotional nostalgic memories, do not miss Never Die Young!",
  },
];

const Home = () => (
  <div className="page-content">
    <div className="page-title">Testimonials</div>
    <div className="content">
      <div className="tile testimonial-tile">
        <Carousel>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-container">
              <div className="testing">
                <div className="testimonial-person" id="unknown"></div>
              </div>
              <div className="text-tile-text-emp testimonial-text testimonial-text">
                {testimonial.text}
                <p className="text-tile-text-minor testimonial-text">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);
export default Home;
