import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger";
    size?: "s" | "m" | "l";
}

const Button: FC<ButtonProps> = ({children, className, variant = "primary", size = "m", ...rest}) => {
    return (
        <button className={clsx(styles.button, className, styles[size], {
            [styles.primary]: variant === "primary",
            [styles.secondary]: variant === "secondary",
            [styles.danger]: variant === "danger",
        })} {...rest}>{children}</button>
    )
}

export default Button;