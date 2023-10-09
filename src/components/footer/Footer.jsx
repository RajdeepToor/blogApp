
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
         <Image src="/logo.png" alt='' width={300} height={300}/>
         
        </div>
       
        <div className={styles.socialIcons}>
         
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
