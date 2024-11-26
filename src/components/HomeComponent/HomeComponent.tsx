import css from "./HomeComponent.module.scss";

const HomeComponent = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button className={css.button}>View Now</button>
    </div>
  );
};

export default HomeComponent;
