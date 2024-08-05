import "./SideNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripLines,
  faAddressBook,
  faPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";



export default function SideNavBar() {
  const [isExpended, setExpendedState] = useState(false);
  const {isAuthenticated} = useLogin()
  
  const menuItems = [
    {
      text: "Formulario",
      icon: <FontAwesomeIcon icon={faAddressBook} />,
    },
    {
      text: "Crear",
      icon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
      text: "/",
      icon: <FontAwesomeIcon icon={faPlus} />,
    },
  ];

  return (
    <div  className={!isAuthenticated ? "oculto" : null} >
    <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        {isExpended && (
          <div className="nav-heading">
            <div className="nav-brand">
              <p>
                <FontAwesomeIcon icon={faGripLines} />
              </p>
              <h2>Show</h2>
            </div>
          </div>
        )}
        <button
          className={
            isExpended
              ? "hamburguer hamburguer-in"
              : "hamburguer hamburguer-out"
          }
          onClick={() => setExpendedState(!isExpended)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="nav-menu">
        {menuItems.map(({ text, icon }) => (
          <Link
            key={text}
            className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
            to={`${text}`}
          >
            <p>{icon}</p>

            {isExpended && <p className="text">{text}</p>}
            {!isExpended && <div className="tooltip">{text}</div>}
          </Link>
        ))}
       
      </div>
      <div className="nav-footer">
        <div className="nav-details">
          <a className="">
            <FontAwesomeIcon className="logout" icon={faRightFromBracket} />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
