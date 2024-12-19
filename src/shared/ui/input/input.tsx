import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import clsx from "clsx";
import styles from "./input.module.scss";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    status?: "valid" | "invalid";
}

const Input: FC<InputProps> = ({className, label, status = "valid", ...rest}) => {

    return (
        <div className={styles.block}>
            <label
                className={clsx(styles.label, {
                    [styles.invalidLabel]: status === "invalid"
                })}
            >{label}</label>
            <input
                className={clsx(styles.input, className, {
                    [styles.invalid]: status === "invalid"
                })}
                {...rest}
            />
        </div>
    )
}

export default Input;