import styles from './main.module.scss';
import {useCategories} from "@/entities/catergories";
import {useEffect} from "react";

const MainPage = () => {
    const {categories, actionGetCategories} = useCategories();

    useEffect(() => {
        actionGetCategories();
    }, [actionGetCategories]);

    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                <ul>
                    {categories.map((category) => (
                        <li>
                            {category}
                        </li>
                    ))}
                </ul>
            </aside>

            <section className={styles.content}>
                contetns
            </section>
        </main>
    )
};

export default MainPage;