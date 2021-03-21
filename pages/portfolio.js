
import { Col,Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import PortfolioItem from 'components/PortfolioItem';
import {getAllPortfolios} from 'lib/api';

export default function Blog({portfolio}) {

  return (
    <PageLayout>
      <h1>Portfolio<hr /></h1>
      <Row className="mb-5"  style={{ padding: '20px 80px' }}>
        {portfolio.map(portfolio => 
        <Col lg="6" md="6" key={portfolio.slug} style={{ padding: '10px 40px' }} >
      <PortfolioItem  title={portfolio.title} subtitle={portfolio.subtitle} image={portfolio.coverImage} link={portfolio.link} />
        </Col>
       )}
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const portfolio = await getAllPortfolios();
  return {
    props: {
      portfolio
    },
    revalidate: 1
  }
}