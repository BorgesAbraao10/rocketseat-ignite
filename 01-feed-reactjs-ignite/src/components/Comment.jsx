import styles from "./Comment.module.css";



export function Comment() {
  return (
    <div className={styles.Comment}>
      <img src="https://github.com/BorgesAbraao10.png" alt="Imagem Avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Abraão Borges</strong>
              <time
                title="16 de Janeiro às 19:04"
                dateTime="2024-01-16 19:04:01"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              
            </button>
          </header>
          <p>Vamos Tricolor!!!!!!!!!</p>
        </div>
        <footer>
          <button>
            
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
