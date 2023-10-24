// import Image from "next/image";
// import Link from "next/link";
// import styles from "./menu.module.css";

// const Menu = ({ imageSrc, title, description }) => {
//     return (
//       <div className={styles.container}>
//         <h2>{"What's Trending"}</h2>
//         <h1>Hot Topics</h1>
//         <div className={styles.menuItems}>
//           <Link href="/" className={styles.Link}>
//           <div className={styles.img}>
//             <Image src="/food.png" alt="" width={350} height={350}/> {/* Adjust width and height as needed */}
//           </div>
//           </Link>
//           <div className={styles.text}>
//             <div className={styles.title}>Car Diaries</div>
//             <div className={styles.description}> A lot of the charismatic V8s have worn out over the last 60 years and have been replaced by characterless and dull Hyundai 2 litre diesel units that belch out huge amounts of particulate matter all over the city. The V8s were far from perfect in this regard but must be better than this! Occasionally you get a car with the original engine still thrumming down the road but it is a rarity. 
// My hope for the future is that they get converted to EVs or hydrogen and then get retro-fitted with  sound synthesisers to make them sound like the burbling 8-cylinder motors they once were. Might be a long shot but gotta hope. </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Menu;
  
import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subHeading}>{"What's hot"}</h2>
      <h1 className={styles.heading}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* Middle section */}
      <h2 className={styles.subHeading}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* last section */}
      <h2 className={styles.subHeading}>Chosen By the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu