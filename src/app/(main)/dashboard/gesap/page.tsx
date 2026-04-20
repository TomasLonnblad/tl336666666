import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.hello}>
        <h1 className="font-semibold text-2xl">My ghost like to travel</h1>
      <p className="text-muted-foreground">
My ghost like to travel so far in the unknown
My ghost like to travel so deep into your space</p>
    </div>
  );
};

export default Home;
