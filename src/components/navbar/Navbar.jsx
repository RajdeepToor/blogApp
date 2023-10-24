// import Image from "next/image";
// import Link from "next/link";
// import AuthLinks from "../authLinks/AuthLinks";
// import ThemeToggle from "../themeToggle/ThemeToggle";
// import styles from "./navbar.module.css";
// const Navbar= () =>{
//     return (
//         <div className={styles.container}>
//           <div className={styles.social}>
//             <Image src="/facebook.png" alt="facebook" width={24} height={24} />
//             <Image src="/instagram.png" alt="instagram" width={24} height={24} />
//             <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
//             <Image src="/youtube.png" alt="youtube" width={24} height={24} />
//           </div>
//           <div className={styles.logo}>
//             <Image src="/logo2.png" alt="" height={200} width={400}></Image>
//           </div>
//           <div className={styles.links}>
            
//             <ThemeToggle/>
//             <Link href="/">Homepage</Link>
//             <Link href="/">Contact</Link>
//             <Link href="/">About</Link>
//            <AuthLinks/>


//           </div>
//         </div>
//       );
      
// }       
// export default Navbar
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import Themetoggle from '../themeToggle/ThemeToggle'
import styles from "./navbar.module.css"

 const Navbar = () =>{
    return (
        <div className={styles.container}>
        <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width ={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width ={24} height={24}/>
        <Image src="/tiktok.png" alt="tiktok" width ={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width ={24} height={24}/>
        </div>
        <div className={styles.logo}>RajdeepBlog</div>
        <div className={styles.links}>
        <Themetoggle/>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks/>
        </div>
        </div>
    );
 };

 export default Navbar