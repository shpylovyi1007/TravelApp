import HomeComponent from "../components/HomeComponent/HomeComponent";
import css from "./Home.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <HomeComponent />
    </div>
  );
};

export default Home;
