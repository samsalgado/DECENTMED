// // import React from 'react';
// import { useContext, useEffect, useState } from "react";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useTranslation } from 'react-i18next';
// import '../App.css';
// import useAdmin from "../Hooks/useAdmin";
// import LOGO from "../images copy/LOGO.png";
// import EducationMenu from './EducationMenu';
// import { AuthContext } from "./Providers/AuthProvider";


// const Topbar = () => {
//   const { t,i18n } = useTranslation("common");
//   const { user, logOut } = useContext(AuthContext)
//   const [isAdmin, isAdminLoading] = useAdmin()
// //  const [showNav, setShowNav] = useState(false);
//  const [showMenu, setShowMenu] = useState(false);
//   // const [selectedLanguage, setSelectedLanguage] = useState("");
//  const toggleMenu = () => {
//       setShowMenu((prev) => !prev);
//     };
//   //  const toggleNav = () => {
//   //     setShowNav((prev) => !prev);
//   //   };

//   useEffect(() => {
//     // Check if language cookie exists
//     const languageCookie = getCookie("preferredLanguage");

//     // Set the initial language based on the cookie or default to English
//     const initialLanguage = languageCookie || "en";

//     // Apply the initial language
//     i18n.changeLanguage(initialLanguage);

//     // Update the state with the initial language
//     // setSelectedLanguage(initialLanguage);
//   }, [i18n]);


//  const changeLang = (lang) => {
//     // Set the language in the i18next instance
//     i18n.changeLanguage(lang);

//     // Set the selected language in a cookie that expires in 365 days
//     setCookie("preferredLanguage", lang, 365);

//     // Update the state
//     // setSelectedLanguage(lang);

//     console.log("Language changed to:", lang);
//   };

//   const setCookie = (name, value, days) => {
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + days);

//     const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
//       value
//     )}; expires=${expirationDate.toUTCString()}; path=/`;

//     document.cookie = cookieString;
//   };

//   const getCookie = (name) => {
//     const decodedName = encodeURIComponent(name);
//     const cookies = document.cookie.split(";");

//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();

//       if (cookie.startsWith(decodedName + "=")) {
//         return decodeURIComponent(cookie.substring(decodedName.length + 1));
//       }
//     }

//     return null;
//   };



//   const handleLogOut = () => {
//     logOut()
//       .then(() => { })
//       .then(window.location.reload())
//   }

//   return (
//     <div className='topbar'>
//       <Navbar bg="light" variant="light" expand="lg" collapseOnSelect> {/* Added expand="lg" prop */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Navbar.Brand href="/">
//             <div><img src={LOGO} className="Logo" alt="logo" /></div>
//           </Navbar.Brand>
//           {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> Added toggle button */}
//           <Nav className="me-auto">
//             <EducationMenu />
//             <Nav.Link href="/telehealth">{t('Find Practioner')}
//             </Nav.Link>
//             <Nav.Link href="/cancer">{t('Cancer')}
//             </Nav.Link>
//             <Nav.Link href='/blog'> {t('Blogs')}
//             </Nav.Link>
//             <Nav.Link href="/apoth">{t('Apothecary')}
//             </Nav.Link>
//             <Nav.Link href='/about'> {t('About Us')}
//             </Nav.Link>

//             {!isAdminLoading && isAdmin &&
//               (<Nav.Link href='/dashboard'>
//                 {t('Dashboard')}
//               </Nav.Link>)
//             }
//             {/* {!isAdminLoading && isAdmin &&
//               (<Nav.Link href='/dashboard'>  <button style={{
//                 backgroundColor: 'blue', color: 'white',
//                 padding: '8px 16px', fontWeight: "bold", border: 'none',
//                 borderRadius: '5px', marginBottom: window.innerWidth <= 768 ? '10px' : '7px',
//               }}>
//                 {t('Dashboard')}
//               </button>
//               </Nav.Link>)
//             } */}
//           </Nav>

//           {
//             user ? <>
//               <button
//                 style={{
//                   backgroundColor: 'blue', gap: '10px', color: 'white', padding: '8px 18px',
//                   fontWeight: "bold", border: 'none', borderRadius: '5px'
//                 }}
//                 onClick={handleLogOut} className="l"> {t('LogOut')} </button> </> : <> <Nav.Link
//                   style={{
//                     backgroundColor: 'blue', color: 'white',
//                     padding: '8px 18px', fontWeight: "bold", border: 'none', borderRadius: '5px',
//                   }}
//                   href='/login'> {t('Login')}  </Nav.Link> </>
//           }

//         </Navbar.Collapse>
// <div className={`change-locale mi-start ${showMenu ? "is-open" : ""}`}>
//   <button
//     className="change-locale-toggle"
//     aria-label="Change locale"
//     onClick={toggleMenu}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="icon mi-end"
//       aria-hidden="true"
//     >
//       <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
//     </svg>

//     <span aria-label="Current locale">
//       {t ? `${t("language")}` : "English"}
//     </span>
//       <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="arrow-icon"
//       aria-hidden="true"
//     >
//       <path
//         fillRule="evenodd"
//         d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
//         clipRule="evenodd"
//       />
//     </svg>
//   </button>
// {/* updated */}
//   {showMenu && (
//     <div className="change-locale-menu inset-i-end" dir="ltr">
//       <span className="lang" onClick={() => changeLang("en")}>English</span>
//       <span className="lang" onClick={() => changeLang("es")}>Español</span>
//       <span className="lang" onClick={() => changeLang("nl")}>Dutch</span>
//       <span className="lang" onClick={() => changeLang("fr")}>Français</span>
//       <span className="lang" onClick={() => changeLang("hi")}>Hindi</span>
//     </div>
//   )}
// </div>

//       </Navbar>

//     </div>
//   );
// };

// export default Topbar;
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import '../App.css';
import LOGO from "../images copy/IMG_1493.jpeg";
import EducationMenu from './EducationMenu';

const Topbar = () => {
  const { t, i18n } = useTranslation("common");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null); // Default language
  const isLoggedIn = !!localStorage.getItem('token');


  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };


  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Function to change language
  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        localStorage.setItem("preferredLanguage", lang);
        setSelectedLang(lang);
        window.location.reload(); // Refresh page after language change

      })
      .catch(err => console.error("Language change error:", err));
  };

  // UseEffect hook to check localStorage on page load
  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") || "en";
    i18n.changeLanguage(storedLang)
      .then(() => {
        setSelectedLang(storedLang);
      })
      .catch(err => console.error("Error loading language:", err));
  }, [i18n, selectedLang]); // ✅ Empty dependency array to prevent re-runs

  return (
    <div className='topbar'>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <div><img src={LOGO} className="Logo" alt="logo" /></div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <EducationMenu />
            <Nav.Link href="/telehealth">{t('Find Practitioner')}</Nav.Link>
            <Nav.Link href="/cancer">{t('Cancer')}</Nav.Link>
            <Nav.Link href='/blog'>{t('Blogs')}</Nav.Link>
            <Nav.Link href="/apoth">{t('Apothecary')}</Nav.Link>
            <Nav.Link href='/about'>{t('About Us')}</Nav.Link>
            
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>{t('LogOut')}</Nav.Link>
              ) : (
                <Nav.Link href="/signup">
                  {t("Sign Up")}
                </Nav.Link>
              )}
          
            {/* <Nav.Link href='/signup'>{t('Sign Up')}</Nav.Link> */}
          </Nav>


        </Navbar.Collapse>

        <div className={`change-locale mi-start ${showMenu ? "is-open" : ""}`}>
          <button
            className="change-locale-toggle"
            aria-label="Change locale"
            onClick={toggleMenu}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon mi-end"
              aria-hidden="true"
            >
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
            <span aria-label="Current locale">{t("language")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="arrow-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="change-locale-menu inset-i-end" dir="ltr">
              <span className="lang" onClick={() => changeLang("en")}>English</span>
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
