import styles from "./Header.module.css";

import saopauloLogo from "../assets/saopaulo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={saopauloLogo} alt="Logotipo São Paulo F.C" />
    </header>
  );
}
