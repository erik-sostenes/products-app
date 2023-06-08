import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const routes = [{path:"login", title:"Login"}, {path:"home", title:"Home"}];
export function NavBar() {
    return(
        <header className={styles.navbar}>
            <nav>
                <ul>
                {
                    routes.map((v) => (
                        <li>
                            <Link to={v.path}>{v.title}</Link>
                        </li>
                    ))
                }
                </ul>
            </nav>
        </header>
    )
}