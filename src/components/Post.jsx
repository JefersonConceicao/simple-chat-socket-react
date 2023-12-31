import styles from "./Post.module.css";
import { useState } from "react";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/jefersonConceicao.png"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong> Jeferson Conceição </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="11 de maio ás 08:13" dateTime="2022-05-11">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀{" "}
          </p>
          <p>
            👉 <a href="#"> jane.design/doctorcare </a>{" "}
          </p>
          <p>
            <a href="#"> #novoprojeto </a>
            <a href="#"> #nlw </a>
            <a href="#"> #rocketseat </a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>
    </article>
  );
}
