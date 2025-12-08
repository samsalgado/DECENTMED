import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import '../App.css';
import LOGO from "../images copy/goklKk.png";
import EducationMenu from './EducationMenu';
import Conditions from "./conditions";

const Topbar = () => {
  const { t, i18n } = useTranslation("common");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null); 
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const toggleMenu = () => setShowMenu(prev => !prev);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        localStorage.setItem("preferredLanguage", lang);
        setSelectedLang(lang); 
      })
      .catch(err => console.error("Language change error:", err));
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") || "en";
    i18n.changeLanguage(storedLang)
      .then(() => setSelectedLang(storedLang))
      .catch(err => console.error("Error loading language:", err));
  }, [i18n]);

  return (
    <div className='topbar'>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect className="navbar-container">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={LOGO} className="Logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column flex-lg-row">
            <EducationMenu />
            <Conditions />
            <Nav.Link href="/summit">{t("Summit")}</Nav.Link>
            <Nav.Link href="/telehealth">{t('Find Practitioner')}</Nav.Link>
            <Nav.Link href='/blog'>{t('Blogs')}</Nav.Link>
            <Nav.Link href="/apoth">{t('Apothecary')}</Nav.Link>
            <Nav.Link href='/about'>{t('About Us')}</Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout}>{t('LogOut')}</Nav.Link>
            ) : (
              <Nav.Link href="/signup">{t("Sign Up")}</Nav.Link>
            )}
            <Nav.Link href="/provider">{t("Provider")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Language Dropdown */}
        <div className={`change-locale ${showMenu ? "is-open" : ""}`} style={{ position: 'relative' }}>
          <button
            className="change-locale-toggle"
            aria-label="Change locale"
            onClick={toggleMenu}
          >
            <span>{selectedLang ? selectedLang.toUpperCase() : t("language")}</span>
          </button>

       {showMenu && (
  <div className="change-locale-menu" style={{
    position: 'absolute',
    top: '100%',
    right: 0,
    zIndex: 999,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    overflow: 'auto',        // allow scrolling if too tall
    maxHeight: '60vh',       // never go off screen vertically
    minWidth: '120px',
    maxWidth: '90vw',        // never overflow viewport horizontally
    wordWrap: 'break-word'   // wrap long words if necessary
  }}>
    <span className="lang" onClick={() => changeLang("English")}>English</span>
    <span className="lang" onClick={() => changeLang("es")}>Español</span>
    <span className="lang" onClick={() => changeLang("nl")}>Dutch</span>
    <span className="lang" onClick={() => changeLang("fr")}>Français</span>
    <span className="lang" onClick={() => changeLang("ch")}>Chinese</span>
    <span className="lang" onClick={() => changeLang("hi")}>Hindi</span>
    <span className="lang" onClick={() => changeLang("ar")}>Arabic</span>
  </div>
)}
        </div>
      </Navbar>
    </div>
  );
};

export default Topbar;
