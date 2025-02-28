import logo from "../../img/Logo.svg";
import fes from "../../img/fes.svg";
import shape from "../../img/shape.svg";
import inst from "../..//img/inst.svg";
import tiktok from "../../img/tik.svg";
import scss from "./Footer.module.scss"
import { Link } from "react-router-dom";

const links = [
  "Недвижимость",
  "Роскошный отдых",
  "Интервью",
  "Дизайн",
  "Продукты",
];
const company = ["О нас", "Контакты"];

function Footer() {
  const link = links.map((e) => (
    <li>
      <a href="#">{e}</a>
    </li>
  ));
  const li = company.map((e) => (
    <li>
      <Link to={"/ab"}>{e}</Link>
    </li>
  ));

  return (
    <footer className={scss.Footer}>
      <div className="container">
        <main className={scss.Footer_top}>
          <img src={logo} alt="" />
          <nav>
            <a>
              <img src={fes} alt="" />
            </a>
            <a>
              <img src={shape} alt="" />
            </a>
            <a>
              <img src={inst} alt="" />
            </a>
            <a>
              <img src={tiktok} alt="" />
            </a>
          </nav>
        </main>
        <section>
          <main className={scss.Footer_desc}>
            <p>
              - ваш гид в мире строительства, объединяющий всех, кто стремится
              создавать надежные и удобные дома, а также поможет читателям
              расширить свой кругозор и узнать что-то новое
            </p>
          </main>
          <main className={scss.Footer_category}>
            <h4>Категории:</h4>
            <ul>{link}</ul>
          </main>
          <main className={scss.Footer_company}>
            <h4>Компания:</h4>
            <ul>{li}</ul>
          </main>
          <main className={scss.Footer_contact}>
            <h3>г. Бишкек, ул. Нуркамала 29</h3>
            <span>График работы: с 9:00 до 20:00</span>
            <a href="">journal.resident.kg@gmail.com</a>
          </main>
        </section>
        <h6>Все права защищены</h6>
      </div>
    </footer>
  );
}

export default Footer;
