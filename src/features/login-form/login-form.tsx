import styles from "./login-form.module.scss";
import {Input, Button} from "@/shared/ui";
import {FormEvent} from "react";

const LoginForm = () => {

    const handleSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className={styles.block}>
            <h2 className={styles.title}>Login Form</h2>
            <form className={styles.form} onSubmit={handleSubmitLogin}>
                <Input className={styles.input} label={"Name"} status={"valid"}/>
                <Input
                    className={styles.input}
                    label={"Password"}
                    status={"valid"}
                    type="password"
                />
                <Button variant={"primary"} size={"l"}>Log in</Button>
            </form>
        </section>
    )
};

export default LoginForm;