import styles from "./Card.module.css";
import logo from "../public/images/logo.png";
import eitaa from "../public/images/eitaa-icon-white.svg";
import { CiMobile3 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.logoBar} src={logo} />
      <div className={styles.name}>
        <div>زینب جهانگیری</div>
        <small>کارآموز کانون وکلای مرکز</small>
        <span>شماره پروانه: 38269</span>
      </div>
      <div className={styles.actionBar}>
        <img src={eitaa} />
        <a href="https://wa.me/+989129215791"></a>
        <FaWhatsapp className={styles.icon} />
        <a href="tel:+989129215791">
          <CiMobile3 className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Card;
