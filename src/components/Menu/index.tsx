import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = 'dark' | 'light' 
export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark";
        return storageTheme;
    });

    const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        })

    }

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme)
    }, [theme])



    return (
        <nav className={styles.menu}>
            <a href="" className={styles.menuLink} area-label="Ir para a Home" title="Ir para a Home">
                <HouseIcon/>
            </a>
            <a href="" className={styles.menuLink} area-label="Ver histórico" title="Ver histórico">
                <HistoryIcon/>
            </a>
            <a href="" className={styles.menuLink} area-label="Configurações" title="Configurações">
                <SettingsIcon />
            </a>
            <a href="" className={styles.menuLink} area-label="Alterar tema" title="Alterar tema" onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}
