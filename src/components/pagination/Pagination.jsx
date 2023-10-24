// "use client";

// import { useRouter } from "next/navigation";
// import styles from "./pagination.module.css";

// const Pagination = ({ page, hasPrev, hasNext }) => {
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//       <button
//         className={styles.button}
//         disabled={!hasPrev}
//         onClick={() => router.push(`?page=${page - 1}`)}
//       >
//         Previous
//       </button>
//       <button
//         disabled={!hasNext}
//         className={styles.button}
//         onClick={() => router.push(`?page=${page + 1}`)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import styles from "./pagination.module.css"

 const Pagination = () =>{
    return (
        <div className={styles.container}>
        <button className={styles.button}>Previous</button>
        <button className={styles.button}>Next</button>
    </div>
    )
 }

 export default Pagination