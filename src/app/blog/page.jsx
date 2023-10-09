import Menu from "@/components/Menu/Menu"
import CardList from "@/components/cardList/CardList"
import styles from "./blogPage.module.css"
const BlogPage=()=>{
    return (
        <div className={styles.container}>
<h1 className={styles.title}>Style blog</h1>
<div className={styles.content}>
    <CardList/>
    <Menu/>
    
</div>

        </div>
    )
}
export default BlogPage
