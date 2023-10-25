import { useEffect, useState } from "react";

import { useRef } from 'react';
import styles from "./Mensagens.module.css";

export function Mensagens({ messages }) {
    const myRef = useRef();

    useEffect(() => {
        myRef.current?.scrollIntoView();
    },[messages]);

  return (
    <main className={styles.containerMessages}>
      {!!messages.length &&
        messages.map((value, index) => (
          <div className={styles.row} ref={myRef} key={index}>
            <div className={styles.message}>
              <small> {value.author} disse: </small>
              <p> { value.message } </p>
            </div>
          </div>
        ))}
    </main>
  );
}
