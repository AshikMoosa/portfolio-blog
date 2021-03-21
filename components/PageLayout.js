import { Navbar } from "react-bootstrap";
import {Container} from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from './Navbar';
import {useTheme} from 'providers/ThemeProvider';
import {ThemeContext, themes} from 'context/ThemeContext';

export default function PageLayout({children,className}) {
  const {theme,toggleTheme} = useTheme();

  return (
    <div className={theme.type}>
    <Head>  
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
    </Head>
    <Container>
      <BlogNavbar theme={theme.type} toggleTheme={toggleTheme} />
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>
      <footer className="page-footer">
        <div>
        <hr />
          <a href="https://www.linkedin.com/in/ashik-moosa/"><img src="/images/linkedin-logo.png" alt="LinkedIn" width="30" height="30" /></a>{' | '}
          <a href="https://github.com/ashton98"><img src="/images/github-sign.png" alt="Github" width="30" height="30" /></a>{' | '}
          <a href="mailto:ashikmoosa96@gmail.com"><img src="/images/email.png" alt="Email" width="30" height="30" /></a>
          
          <h4 style={{paddingTop:"10px"}}>Ashik Moosa © 2021</h4>
        </div>
      </footer>
    </Container>
    <style jsx global>{`
    html,body {
      background: ${theme.background};
      color: ${theme.fontColor};
      transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
    }    
    `}
    </style>    
    </div>
  )
}