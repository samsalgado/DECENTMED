import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import "../App.css";
import LOGO from "../images copy/goklKk.png";
import EducationMenu from "./EducationMenu";
import Conditions from "./conditions";

const Topbar = () => {
  const { t, i18n } = useTranslation("common");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const isLoggedIn = !!localStorage.getItem("token");
  //const [show, setShow] = useState(false);
  //const handleMouseEnter = () => setShow(true);
  //const handleMouseLeave = () => setShow(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const changeLang = (lang) => {
    i18n
      .changeLanguage(lang)
      .then(() => {
        localStorage.setItem("preferredLanguage", lang);
        setSelectedLang(lang);
        setShowMenu(false);
      })
      .catch((err) => console.error("Language change error:", err));
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage") || "en";
    i18n
      .changeLanguage(storedLang)
      .then(() => setSelectedLang(storedLang))
      .catch((err) => console.error("Error loading language:", err));
  }, [i18n]);

  return (
    <>
    <style>
{`
  @media (max-width: 768px) {
    #language-dropdown {
      left: 0 !important;
      right: auto !important;
      max-width: 90vw !important;
    }
  }
`}
</style>
    <div className="topbar-wrapper">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#00695c",
          padding: "0.75rem 2rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={LOGO} className="Logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column flex-lg-row">
            <EducationMenu />
            <div
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <Conditions />
            </div>

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/summit"
            >
              {t("Summit")}
            </Nav.Link>

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/telehealth"
            >
              {t("Find Practitioner")}
            </Nav.Link>

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/blog"
            >
              {t("Blogs")}
            </Nav.Link>

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/apoth"
            >
              {t("Apothecary")}
            </Nav.Link>

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/about"
            >
              {t("About Us")}
            </Nav.Link>

            {isLoggedIn ? (
              <Nav.Link
                style={{ color: "white", transition: "0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                onClick={handleLogout}
              >
                {t("LogOut")}
              </Nav.Link>
            ) : (
              <Nav.Link
                style={{ color: "white", transition: "0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                href="/signup"
              >
                {t("Sign Up")}
              </Nav.Link>
            )}

            <Nav.Link
              style={{ color: "white", transition: "0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              href="/provider"
            >
              {t("Provider")}
            </Nav.Link>
          </Nav>

          {/* LANGUAGE DROPDOWN */}
          <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
            <div style={{ position: "relative", maxWidth: "180px" }}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "right",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                aria-label="Change locale"
                onClick={toggleMenu}
              >
                {selectedLang ? selectedLang.toUpperCase() : t("language")}
              </button>

              {showMenu && (
                <div
                  id="language-dropdown"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    zIndex: 999,
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                    overflow: "auto",
                    maxHeight: "60vh",
                    minWidth: "140px",
                    maxWidth: "240px",
                    wordWrap: "break-word",
                  }}
                >
                  {[
                    { code: "en", label: "English" },
                    { code: "es", label: "Español" },
                    { code: "nl", label: "Dutch" },
                    { code: "fr", label: "Français" },
                    { code: "ch", label: "Chinese" },
                    { code: "hi", label: "Hindi" },
                    { code: "ar", label: "Arabic" },
                  ].map(({ code, label }) => (
                    <span
                      key={code}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        color: "#00695c",
                      }}
                      onClick={() => changeLang(code)}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  );
};

export default Topbar;
