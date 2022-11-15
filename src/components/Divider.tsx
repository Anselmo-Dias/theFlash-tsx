import styles from "./Divider.module.css";


interface DividerProps {
    newStyle?: boolean;
}

export function Divider({ newStyle } :  DividerProps) {
    return <div className={ newStyle ? styles.divider1 :  styles.divider2 }></div>
}