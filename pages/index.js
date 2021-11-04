import PageLayout from "components/PageLayout";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";

const ROLES = ["Feel free to take a look at my latest projects and articles."];
const Index = () => {
  return (
    <PageLayout navClass="transparent" className="cover">
      <div
        className="main-section"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Container className="mx-auto col-md-8" style={{}}>
          <div className={`hero-welcome-text `}>
            <h1 className={`hero-welcome-text-spec`}>
              Hello, I'm <span style={{ color: "crimson" }}>Ashik Moosa</span>.
              <br />
              I'm a full-stack web developer.
            </h1>
          </div>
          <Typed
            loop
            typeSpeed={30}
            backSpeed={20}
            strings={ROLES}
            backDelay={1000}
            loopCount={0}
            showCursor
            className={`self-typed `}
            cursorChar="|"
          />
          <Row></Row>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Index;
