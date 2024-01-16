import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/BorgesAbraao10.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Abraão Borges</strong>
            <span>Sócio Torcedor</span>
          </div>
        </div>
        <time title="16 de Janeiro às 19:04" dateTime="2024-01-16 19:04:01">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          "O São Paulo F.C. é mais que um time, é uma paixão que pulsa em cada
          vitória, em cada derrota que enfrentamos juntos. A cada jogo, minha
          alma se veste de vermelho, preto e branco, e meu coração bate no ritmo
          acelerado das emoções. Somos uma nação tricolor, uma família que
          compartilha alegrias e tristezas, mas nunca deixa de acreditar. O
          Morumbi é nosso altar, e cada jogador, um herói que defende nossas
          cores. Vamos São Paulo, a torcida está contigo, hoje e sempre! 🔴⚪⚫
          #VamosSãoPaulo #TricolorPeloMundo"
        </p>
      </div>
    </article>
  );
}
