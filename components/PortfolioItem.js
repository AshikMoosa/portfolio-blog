
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import {urlFor} from 'lib/api';

const PortfolioItem = ({title,subtitle,image, link}) => {
  
  return (
   
    
  

    <Card className={`fj-card`} >
    
      <div className="card-body-wrapper">
      <a className="card-block stretched-link text-decoration-none clickable"   href={link} />
        <Card.Header
          className="d-flex flex-row">
        </Card.Header>
        <div className="view overlay">
       
          <Card.Img
          style={{height:"250px"}}
          src={
            urlFor(image)
            .crop('center')
            .fit('clip')
            .height(400)
            .url()}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text style={{fontSize:"18px"}}>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      
    </Card>
  )
}

export default PortfolioItem;