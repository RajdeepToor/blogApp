
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const CardList = () => {
  const imageSources = [
    "/ocean.jpg",
    "/culture.png",
    "/library.jpg",
    "/mountain.jpg",
  ];


  const cardData = [
    {
      title: "Explore Ocean Waves 1",
      def:"CULTURE",
      description:
        "The ocean (also known as the sea or the world ocean) is a body of salt water that covers approximately 70.8% of the Earth...",
    },
    {
      title: "Sea Side Exploration",
      def:"EXPLORATION",
      description:
       "salt water that covers approximately 70.8% of the Earth...",
    },
    {
      title: "Architecture",
      def:"BUILDINGS",
      description:
        "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.",
    },
    {
      title: "Museum",
      def:"WODERS",
      description:
        "(Museum) architecture is defined as the art of designing and installing or building a space that will be used to house specific museum functions, more particularly the functions of exhibition and display, preventive and remedial active conservation, study, management, and receiving visitors.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Previous Posts</h1>
      <div className={styles.posts}>
        {imageSources.map((imageSrc, index) => (
          <Card
            key={index}
            imageSrc={imageSrc}
            title={cardData[index].title}
            description={cardData[index].description}
            def={cardData[index].def}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
