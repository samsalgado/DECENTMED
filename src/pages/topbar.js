import React from 'react';
import LOGO from "../images copy/LOGO.png";
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import EducationMenu from './EducationMenu';
import { useTranslation } from 'react-i18next';
const Topbar = () => {
  const { t } = useTranslation();
  return (
    <div className='topbar'>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect> {/* Added expand="lg" prop */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">
          <div><img src={LOGO} className="Logo" alt="logo" /></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Added toggle button */}
          <Nav className="me-auto">
          <EducationMenu />
            <Nav.Link href="/telehealth">{t('Find Practioner')}
            </Nav.Link>
            <Nav.Link href="/cancer">{t('Cancer')}
          </Nav.Link>
            <Nav.Link href='/blog'> {t('Blogs')}
            </Nav.Link>
            <Nav.Link href="/apoth">{t('Apothecary')}
            </Nav.Link>
            <Nav.Link href='/about'> {t('About Us')}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;
