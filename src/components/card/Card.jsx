// Card.js
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ imageSrc,def,title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.singlepost}>
        <div className={styles.image}>
          <Image src={imageSrc} alt="" fill  className={styles.Images}/>
        </div>
        <div className={styles.text}>
          <div className={styles.detail}>
            <span className={styles.date}>15.07.2023 </span>
            <span className={styles.category}>--{def}</span>
          </div>
          <Link href="/">
            <h1>{title}</h1>
          </Link>
          <p className={styles.textdesc}>{description}</p>
          <Link href="/"className={styles.links}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
