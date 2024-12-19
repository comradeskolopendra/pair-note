import {LoginForm} from "@/features";
import styles from "./login.module.scss";


const Login = () => {
    return (
        <main className={styles.main}>
            <LoginForm/>
        </main>
    )
};

export default Login;