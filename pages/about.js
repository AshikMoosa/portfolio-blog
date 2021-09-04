import PageLayout from "components/PageLayout";
import { Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <PageLayout>
      <h1>
        About Me
        <hr />
      </h1>
      <Row>
        <Col md="7" className={`about-me`}>
          <p>
            I am a software engineer, currently developing products for
            Globallogic in Noida, India and their biggest enterprise client
            Insurity. I specialize in building applications specific to the
            business needs of my clients and follows Scaled Agile Methodology. I
            have done work in front-end/back-end web and video game development.
          </p>

          <p>
            Besides programming, I like to write blogs and play table-tennis. I
            love spending time with friends and family and can often be found
            together watching the latest movie or combat sports(UFC), staying in
            playing video games or Hitting the gym.
          </p>

          <p>
            I graduated from APJ Abdul Kalam Technological University where I
            studied B.Tech in Computer Science & Engineering and got second rank
            in class. While I was at university I worked as an intern for a
            startup called Hasura, that helped me to further hone in my skills
            as a web developer.
          </p>
          <p>
            <i style={{ fontWeight: "900" }}>
              "I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. I prefer to keep learning,
              continue challenging myself, and do interesting things that
              matter."
            </i>
          </p>
        </Col>
        <Col md="4" className="ml-auto">
          <div className="hero-section">
            <div className={`flipper`}>
              <div className="back">
                {/* <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div> */}
                <img className="image" src="/images/myimage.jpg" />
                <div className="shadow-custom">
                  <div className="shadow-inner"> </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div>
        <h1 className="cv-me">
          Resume
          <hr />
        </h1>
        <Row>
          <Col md={{ size: 8, offset: 0 }}>
            <iframe
              style={{ width: "100%", height: "1200px" }}
              src="/Resume.pdf"
            />
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};

export default About;
