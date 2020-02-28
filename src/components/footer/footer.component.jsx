import React from "react";
import Logo from "../../assets/images/pichango.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer d-flex justify-content-between">
      <p className="text-xs-center">
          &copy;{new Date().getFullYear()} Capsium Creative Agency - All Rights Reserved
      </p>
      <ul className="d-flex">
        <li>
          <a href=""><i class="fab fa-facebook"></i></a></li>
        <li>
          <a href=""><i class="fab fa-twitter"></i></a></li>
        <li>
          <a href=""><i class="fab fa-whatsapp"></i></a></li>
        <li>
          <a href=""><i class="fab fa-facebook-messenger"></i></a></li>
      </ul>
    </footer>
  )
}

export {
  Footer
}