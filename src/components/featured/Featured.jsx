// import Image from "next/image";
// import styles from "./featured.module.css";
// const Featured= () =>{
//     return(
        
// <div className={styles.container}>
//      <h1 className={styles.title}><b>Hey,Rajdeep here!</b> welcome to my world of ideas and thoughts</h1>
//         <div className={styles.post}>
//              <div className={styles.imgContainer}>
//                     <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
//              </div>
//              <div className={styles.textContainer}>
//                     <h1 className={styles.postTitle}>Look at this Image</h1>
//                     <p className={styles.postDesc}>Probably greece or spain , i dont remember this one</p>
//                     <button className={styles.button}>Look for more</button>
//              </div>
//         </div>

// </div>
//     )
// }
// export default Featured
import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey rajdeep here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> post title</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;