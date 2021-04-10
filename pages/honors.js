import React from 'react';
import PageLayout from 'components/PageLayout';
import { Row,Col,Card,Modal,Button } from 'react-bootstrap';

function Honors() {
  const [modalShow, setModalShow] = React.useState(false);
  const [someData, setDataShow] = React.useState();
const FNAMES = ['aceaward','kudos1','kudos2','kudos3','kudos4','kudos5'];

  return (
    <PageLayout>

      <h1>Awards<hr /></h1>
       <Row>
         <Col>
            
           <Card className="col-md-6 fj-card" style={{padding:"20px"}}>
           <a className="card-block stretched-link text-decoration-none clickable" value={1}  onClick={() => {setModalShow(true); setDataShow(0)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[0]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Title className="font-weight-bold mb-1" tag="h5">ACE OF THE PROJECT - 2021</Card.Title>
            
           </Card.Body>
           </Card>
         </Col>
       </Row>
       <h1>Kudos<hr /></h1>
       <Row>
       <Col  className="col-md-4 kudos">
           <Card className="fj-card"  style={{padding:"10px"}}>
            
           <a className="card-block stretched-link text-decoration-none clickable"   onClick={(FNAMES) => {setModalShow(true); setDataShow(1)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[1]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Subtitle className="font-weight-bold mb-1" tag="h5">Scrum Master</Card.Subtitle>
            
           </Card.Body>
           </Card>
         </Col>
         <Col  className="col-md-4 kudos">
           <Card className="fj-card"  style={{padding:"10px"}}>
           <a className="card-block stretched-link text-decoration-none clickable"  onClick={() => {setModalShow(true); setDataShow(4)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[4]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Subtitle className="font-weight-bold mb-1" tag="h5">Product Owner</Card.Subtitle>
            
           </Card.Body>
           </Card>
         </Col>
         <Col  className="col-md-4 kudos">
           <Card className="fj-card"  style={{padding:"10px"}}>
           <a className="card-block stretched-link text-decoration-none clickable"  onClick={() => {setModalShow(true); setDataShow(3)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[3]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Subtitle className="font-weight-bold mb-1" tag="h5">Lead Developer</Card.Subtitle>
            
           </Card.Body>
           </Card>
         </Col>
         <Col  className="col-md-4 kudos">
           <Card className="fj-card"  style={{padding:"10px"}}>
           <a className="card-block stretched-link text-decoration-none clickable"  onClick={() => {setModalShow(true); setDataShow(2)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[2]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Subtitle className="font-weight-bold mb-1" tag="h5">Business Analyst</Card.Subtitle>
            
           </Card.Body>
           </Card>
         </Col>
         <Col  className="col-md-4 kudos">
           <Card className="fj-card"  style={{padding:"10px"}}>
           <a className="card-block stretched-link text-decoration-none clickable"   onClick={() => {setModalShow(true); setDataShow(5)}} />
           <Card.Img  width="100%" src={`./images/${FNAMES[5]}.jpg`} alt="Card image cap" />
           <Card.Body>
             <Card.Subtitle className="font-weight-bold mb-1" tag="h5">Senior Developer</Card.Subtitle>
            
           </Card.Body>
           </Card>
         </Col>
       </Row>
  
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
    
        <Card.Img  width="100%" src={`./images/${props.fnames[props.value]}.jpg`} alt="Card image cap" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      
    </Modal>
    
  );
}


export default Honors;