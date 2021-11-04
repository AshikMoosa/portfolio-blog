import React from "react";
import PageLayout from "components/PageLayout";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
function Honors() {
  const [modalShow, setModalShow] = React.useState(false);
  const [someData, setDataShow] = React.useState();
  const FNAMES = [
    "aceaward",
    "kudos1",
    "kudos2",
    "kudos3",
    "kudos4",
    "kudos5",
    "spotaward",
  ];

  return (
    <PageLayout>
      <h1>
        Awards
        <hr />
      </h1>
      <Row className="awards-section" id="awards-section">
        <Row>
          <Col>
            <Card className="fj-card" style={{ padding: "20px" }}>
              <a
                className="card-block stretched-link text-decoration-none clickable"
                value={1}
                onClick={() => {
                  setModalShow(true);
                  setDataShow(0);
                }}
              />
              <Card.Img
                width="100%"
                src={`./images/${FNAMES[0]}.jpg`}
                alt="Card image cap"
              />
              <Card.Body>
                <Card.Title className="font-weight-bold mb-1" tag="h5">
                  ACE OF THE PROJECT - 2021
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="fj-card" style={{ padding: "20px" }}>
              <a
                className="card-block stretched-link text-decoration-none clickable"
                value={1}
                onClick={() => {
                  setModalShow(true);
                  setDataShow(6);
                }}
              />
              <Card.Img
                width="100%"
                src={`./images/${FNAMES[6]}.jpg`}
                alt="Card image cap"
              />
              <Card.Body>
                <Card.Title className="font-weight-bold mb-1" tag="h5">
                  SPOTLIGHT OF THE MONTH - 2021
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <h1>
        Testimonials
        <hr />
      </h1>
      <Carousel>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                Ashik, have shown great learning progress and his zeal to keep
                learning and sharing with team is really commendable. His
                attitude of going in-depth and covering all aspects of
                requirement help our team to deliver the good quality code.
              </q>
            </p>

            <h4 className="card-title text-center">
              Naveen Mendiratta - Scrum Master
            </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                Ashik is a great resource to the team. he accomplish his work
                with utmost sincerity which makes a difference.
              </q>
            </p>

            <h4 className="card-title text-center">
              Vimal Rastogi - Product Owner
            </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                Having Ashik on the team makes a huge difference. It's really
                admirable how he always see projects through from conception to
                completion.
              </q>
            </p>

            <h4 className="card-title text-center">
              Saumyakanta Sahoo - Lead Developer
            </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                Ashik is a valuable resource of the team whose attention to
                details is inspirational.
              </q>
            </p>

            <h4 className="card-title text-center">
              Kapil Marwah - Business Analyst
            </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                I like the way how ashik gets deep dive into the issue and
                provide some valuable feedbacks to resolve those issues.
              </q>
            </p>

            <h4 className="card-title text-center">
              Ravi Mishra - Senior Developer
            </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <div
            className="card card-award"
            style={{ padding: "60px 0", marginTop: "60px" }}
          >
            <p
              className="card-text text-center"
              style={{ width: "70%", alignSelf: "center", fontSize: "16px" }}
            >
              <q>
                Ashik is doing a great job in the team. He is very good in
                development and managing refinement of backlog single handedly
                with proactive communication with onshore team.
              </q>
            </p>

            <h4 className="card-title text-center">
              Shikha Agarwal - Project Manager
            </h4>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <Row>
        <Col classNameName="col-md-4 kudos">
          <Card classNameName="fj-card" style={{ padding: "10px" }}>
            <a
              classNameName="card-block stretched-link text-decoration-none clickable"
              onClick={(FNAMES) => {
                setModalShow(true);
                setDataShow(1);
              }}
            />
            <Card.Img
              width="100%"
              src={`./images/${FNAMES[1]}.jpg`}
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Subtitle classNameName="font-weight-bold mb-1" tag="h5">
                Scrum Master
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col classNameName="col-md-4 kudos">
          <Card classNameName="fj-card" style={{ padding: "10px" }}>
            <a
              classNameName="card-block stretched-link text-decoration-none clickable"
              onClick={() => {
                setModalShow(true);
                setDataShow(4);
              }}
            />
            <Card.Img
              width="100%"
              src={`./images/${FNAMES[4]}.jpg`}
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Subtitle classNameName="font-weight-bold mb-1" tag="h5">
                Product Owner
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col classNameName="col-md-4 kudos">
          <Card classNameName="fj-card" style={{ padding: "10px" }}>
            <a
              classNameName="card-block stretched-link text-decoration-none clickable"
              onClick={() => {
                setModalShow(true);
                setDataShow(3);
              }}
            />
            <Card.Img
              width="100%"
              src={`./images/${FNAMES[3]}.jpg`}
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Subtitle classNameName="font-weight-bold mb-1" tag="h5">
                Lead Developer
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col classNameName="col-md-4 kudos">
          <Card classNameName="fj-card" style={{ padding: "10px" }}>
            <a
              classNameName="card-block stretched-link text-decoration-none clickable"
              onClick={() => {
                setModalShow(true);
                setDataShow(2);
              }}
            />
            <Card.Img
              width="100%"
              src={`./images/${FNAMES[2]}.jpg`}
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Subtitle classNameName="font-weight-bold mb-1" tag="h5">
                Business Analyst
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col classNameName="col-md-4 kudos">
          <Card classNameName="fj-card" style={{ padding: "10px" }}>
            <a
              classNameName="card-block stretched-link text-decoration-none clickable"
              onClick={() => {
                setModalShow(true);
                setDataShow(5);
              }}
            />
            <Card.Img
              width="100%"
              src={`./images/${FNAMES[5]}.jpg`}
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Subtitle classNameName="font-weight-bold mb-1" tag="h5">
                Senior Developer
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      <MyVerticallyCenteredModal
        fnames={FNAMES}
        value={someData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </PageLayout>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Card.Img
          width="100%"
          src={`./images/${props.fnames[props.value]}.jpg`}
          alt="Card image cap"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Honors;
