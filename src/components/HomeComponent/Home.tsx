import css from "./Home.module.scss";

const HomeComponent = () => {
  return (
    <div className={css.home}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <button>View Now</button>
    </div>
  );
};

export default HomeComponent;
