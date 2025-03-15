import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameLine = name ? `Olá, meu nome é ${name}` : 'Olá';
    const emailLine = email ? `Meu email é ${email}` : '';
    const messageLine = message ? `${message}` : '';
    const whatsappMessage = `${nameLine}\n${emailLine}\n${messageLine}`;
    const whatsappUrl = `https://wa.me/5562992567382?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          Seu nome
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">
          Seu Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">
          Sua mensagem
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;