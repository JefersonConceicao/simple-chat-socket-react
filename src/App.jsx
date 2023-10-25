import {useState, useEffect } from 'react';

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Mensagens } from './components/Mensagens';
import { FormChat } from './components/FormChat';

import "./global.css";
import styles from "./App.module.css";

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export function App() {
  const [messages, setMessages] = useState([]);

  socket.on('get_messages', data => {
      setMessages(data);     
  })  

  return (
    <>
      <Header />
        <main className={styles.container}>
          <Mensagens messages={messages}/>
          <FormChat socket={socket} setMessages={setMessages} messages={messages}/>
        </main>
    </>
  );
}
