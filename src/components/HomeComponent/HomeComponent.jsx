import { Link } from "react-router-dom";
import css from "./HomeComponent.module.scss";

const HomeComponent = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Link to="/campers" className={css.button}>
        View Now
      </Link>
    </div>
  );
};

export default HomeComponent;
