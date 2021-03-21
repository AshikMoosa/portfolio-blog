import { Navbar, Nav  } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({theme,toggleTheme}) => {
  
  return (
    <Navbar
        variant={theme.type}
        className="fj-navbar fj-nav-base"
        bg="transparent"
        expand="lg" >
        <Navbar.Brand className="fj-navbar-brand">
          <Link href="/" >
            <a style={{textDecoration:"none"}}>Ashik Moosa</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            
            <Nav.Link
              as={ () =><Link href='/' ><a  className="fj-navbar-item fj-navbar-link">Home</a></Link> }
            />

            <Nav.Link
              as={ () =><Link href='/about' ><a  className="fj-navbar-item fj-navbar-link">About</a></Link> }
            />
            
            <Nav.Link
              as={ () =><Link href='/portfolio' ><a  className="fj-navbar-item fj-navbar-link">Portfolio</a></Link> }
            />

            <Nav.Link
              as={ () =><Link href='/blog' ><a  className="fj-navbar-item fj-navbar-link">Blog</a></Link> }
            />

            <Nav.Link
              as={ () =><Link href='/honors' ><a  className="fj-navbar-item fj-navbar-link">Honors</a></Link> }
            />
             
          </Nav>
          <ThemeToggle theme={theme} onChange={toggleTheme} />
        </Navbar.Collapse>
       
      </Navbar>
     
  )
}

export default BlogNavbar;