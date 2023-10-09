import styles from "./themeToggle.module.css"
const ThemeToggle=()=>{
    return (
        <div className={styles.container}>

            <img src="/moon.png" alt="moon" width={14} height={14}/>
            <div className={styles.ball}></div>
            <img src="/sun.png" alt="sun" width={14} height={14}/>



        </div>
    )
}
export default ThemeToggle