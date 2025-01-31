import React, { useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const textareaRef = useRef(null);
  const formRef = useRef(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formState;

    if (!name || !email || !message) {
      alert(t('All fields are required!'));
      return;
    }

    if (!validateEmail(email)) {
      alert(t('Please enter a valid email address!'));
      return;
    }

    try {
      const response = await emailjs.sendForm(
        'service_osvs85d',
        'template_pbbqahk',
        formRef.current,
        'CzYZ8kM6_hIs4hFLa'
      );

      if (response.status === 200) {
        alert(t('Your message has been sent!'));
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending error:', error);
      alert(t('Failed to send message.'));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 300)}px`;
    }
  };

  return (
    <section className={`${styles.contact} container`} aria-labelledby="contact-title" id="contact-me">
      <h2 id="contact-title" className={styles.title}>
        <span className={styles.accent}>#</span>{t('contact_title')}
      </h2>
      <p className={styles.description}>{t('contact_desc')}</p>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder={t('name_placeholder')}
            value={formState.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder={t('email_placeholder')}
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder={t('message_placeholder')}
          value={formState.message}
          onChange={handleChange}
          ref={textareaRef}
          required
        />
        <button type="submit" className={styles.submit}>
          {t('submit')}
        </button>
      </form>
    </section>
  );
};
