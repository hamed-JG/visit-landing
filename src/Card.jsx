import styles from "./Card.module.css";
import logo from "../public/images/logo.png";
import eitaa from "../public/images/eitaa-icon-black.svg";
import { IoCallSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const about = {
  education: `دانش آموخته پردیس دانشگاه تهران با معدل 20`,
  experience: `6 سال سابقه فعالیت حقوقی حین تحصیل`,
  skills: `مسلط به روند پیگیری انواع پرونده های قضایی و کیفری`,
};

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} />
        <div className={styles.name}>
          <div>زینب جهانگیری</div>
          <small>کارآموز کانون وکلای مرکز</small>
          <span>ش.پ: 38269</span>
        </div>
      </div>

      <div className={styles.main}>
        <h4>ارتباط با من</h4>
        <div>
          <a href="tel:+989129215791">
            <IoCallSharp className={styles.icon} />
          </a>
          <a href="https://t.me/Zeynabjahangiri">
            <FaTelegramPlane className={styles.icon} />
          </a>
          <a href="https://wa.me/+989129215791">
            <RiWhatsappFill className={styles.icon} />
          </a>
          <img src={eitaa} className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className={styles.actionBar}>
      </div> */
}
