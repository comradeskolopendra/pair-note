import {LoginForm} from "@/features";
import styles from "./login.module.scss";


const LoginPage = () => {
    return (
        <main className={styles.main}>
            <LoginForm/>
        </main>
    )
};

export default LoginPage;