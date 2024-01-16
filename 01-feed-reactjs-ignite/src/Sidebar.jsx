import styles from "./Sidebar.module.css";

import minhaImagem from './assets/abraao-avatar.jpg'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://th.bing.com/th/id/R.b268a0a20c7f49c4dab8edb55a09d0f5?rik=VPVrSCoHSg3N4Q&riu=http%3a%2f%2fmngr.saopaulofc.net%2fmedia%2f249480%2fATACANTES.png&ehk=Ts5NOsu3wNMeXFCiKOlsPycufGbf1RH1iMKDaLhjjPI%3d&risl=&pid=ImgRaw&r=0"
        alt="Jogadores"
      />

      <div className={styles.profile}>
        <img src={minhaImagem} alt="avatar" className={styles.minhaImagem}/>
        <strong>Abraão Borges</strong>
        <span>Sócio Torcedor</span>
      </div>

      <footer>
        <a href="https://spfc.net/" target="blank">
          Site Oficial
        </a>
      </footer>
    </aside>
  );
}
