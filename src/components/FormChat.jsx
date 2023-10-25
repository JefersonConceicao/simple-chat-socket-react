import { useState, useEffect } from "react";
import styles from "./FormChat.module.css";
import io from "socket.io-client";

export function FormChat({ socket, messages, setMessages }) {
  const [form, setForm] = useState({
    author: "Jeferson",
    message: "",
  });

  const enviaMensagemParaOSocket = (e) => {
    e.preventDefault();

    socket.emit("send_message", form, (data) => {
      setMessages([...messages, data]);
      setForm({ ...form, message: "" });
    });
  };

  const aoPressionarEnter = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      enviaMensagemParaOSocket(e);
    }
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={enviaMensagemParaOSocket}>
        <textarea
          type="text"
          name="send_message"
          placeholder="Digite qualquer coisa"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onKeyDown={aoPressionarEnter}
          value={form.message}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
