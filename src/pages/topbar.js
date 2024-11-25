// import React from 'react';
import { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import '../App.css';
import useAdmin from "../Hooks/useAdmin";
import LOGO from "../images copy/LOGO.png";
import EducationMenu from './EducationMenu';
import { AuthContext } from "./Providers/AuthProvider";


const Topbar = () => {
  const { t } = useTranslation();
  const { user, logOut } = useContext(AuthContext)

  const [isAdmin, isAdminLoading] = useAdmin()
  console.log(isAdmin);
  //   const handleLogout = async () => {
  //   try {
  //     await axios.post('http://localhost:5001/api/logout', {}, { withCredentials: true });
  //     setUser(null);
  //     navigate('/login', { replace: true });
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(window.location.reload())
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className='topbar'>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect> {/* Added expand="lg" prop */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <div><img src={LOGO} className="Logo" alt="logo" /></div>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> Added toggle button */}
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

            {!isAdminLoading && isAdmin &&
              (<Nav.Link href='/dashboard'>  <button style={{
                backgroundColor: 'blue', color: 'white',
                padding: '8px 16px', fontWeight: "bold", border: 'none',
                borderRadius: '5px', marginBottom: window.innerWidth <= 768 ? '10px' : '7px',
              }}>
                {t('Dashboard')}
              </button>
              </Nav.Link>)
            }
          </Nav>

          {
            user ? <>
              <button
                style={{
                  backgroundColor: 'blue', gap: '10px', color: 'white', padding: '8px 18px',
                  fontWeight: "bold", border: 'none', borderRadius: '5px'
                }}
                onClick={handleLogOut} className="l"> LogOut </button> </> : <> <Nav.Link
                  style={{
                    backgroundColor: 'blue', color: 'white',
                    padding: '8px 18px', fontWeight: "bold", border: 'none', borderRadius: '5px',
                  }}
                  href='/login'> {t('Login')}  </Nav.Link> </>
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;
