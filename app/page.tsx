"use client"

import LoginForm from '@shared/components/LoginForm';
import {useTranslation} from "react-i18next";

import '@shared/styles/index.css'
import styles from './styles/Home.module.scss';

export default function HomePage() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Cosmoswin</h1>
          <button onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'عربي' : 'English'}
          </button>
        </header>

          <LoginForm />
      </div>
  );
}