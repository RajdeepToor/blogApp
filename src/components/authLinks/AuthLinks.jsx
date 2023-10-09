import Link from "next/link";
import styles from "./authLinks.module.css";
const AuthLinks=()=>{
    const status="authenticated";
    
    return  (
        <>
            {status==="authenticated" ? (<Link href="/login">Login</Link> ):(
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.Link}>Logout</span>
                </>
            )}
        </>
    )
       
    
}
export default AuthLinks