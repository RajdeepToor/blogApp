
import Image from "next/image"
import Link from "next/link"
import styles from "./category.module.css"
const CategoryList= () =>{
    return(
        
<div className={styles.container}>
        <h1 className={styles.title}>Trending Topics</h1>
        <div className={styles.categories}>
        <Link href={`/blog`} className={`${styles.category} ${styles.style}`}>
            <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
            Style
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
            <Image src="/fashion.png" alt="" width={32} height={32} className={styles.image}/>
            Fashion
        </Link> 
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
            <Image src="/food.png" alt="" width={32} height={32} className={styles.image}/>
            Food
        </Link> 
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
            <Image src="/travel.png" alt="" width={32} height={32} className={styles.image}/>
            Travel
        </Link> 
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
            <Image src="/culture.png" alt="" width={32} height={32} className={styles.image}/>
            Culture
        </Link>
        
        </div>

</div>
    )
}
export default CategoryList