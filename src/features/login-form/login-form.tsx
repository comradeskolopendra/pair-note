import styles from "./login-form.module.scss";
import {Input, Button} from "@/shared/ui";
import {ChangeEvent, FormEvent, useCallback, useState} from "react";
import useAuth from "@/entities/auth";

const LoginForm = () => {
    const {actionLoginUser} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        actionLoginUser(username, password);
    }

    const handleChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUsername(() => value);
    }, [setUsername]);

    const handleChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(() => value);
    }, [setPassword]);

    return (
        <section className={styles.block}>
            <h2 className={styles.title}>Login Form</h2>
            <form className={styles.form} onSubmit={handleSubmitLogin}>
                <Input
                    className={styles.input}
                    label={"Name"}
                    status={"valid"}
                    type={"text"}
                    value={username}
                    onChange={handleChangeUsername}
                />
                <Input
                    className={styles.input}
                    label={"Password"}
                    status={"valid"}
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <Button variant={"primary"} size={"l"}>Log in</Button>
            </form>
        </section>
    )
};

export default LoginForm;