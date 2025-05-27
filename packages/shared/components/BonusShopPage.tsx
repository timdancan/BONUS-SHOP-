'use client';

import React from 'react';
import '..//utilits/i18n';
import { useUserStore } from '../stores/userStore';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { getEligibleBonuses } from '../utilits/getEligibleBonuses';

import styles from '../styles/BonusShop.module.scss';

export default function BonusShop({ brand }: { brand: 'cosmoswin' | 'betfinal' }) {
    const { user, logout } = useUserStore();
    const { t, i18n } = useTranslation();
    const router = useRouter();

    if (!user) {
        router.push('/');
        return null;
    }

    const eligibleBonuses = getEligibleBonuses(user, brand, new Date());

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    };

    const goToDeposit = () => {
        router.push('/deposit');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{t('bonusShop')}</h1>
                <button onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'عربي' : 'English'}
                </button>
            </header>

            <div className={styles.welcome}>
                <p>
                    {t('welcome')}, <strong>{user.username}</strong>!
                </p>
                <p>
                    {t('currentBalance')}: <strong>{user.currentBalance}</strong>
                </p>
                <div className={styles.actions}>
                    <button onClick={goToDeposit}>
                        {t('goToDeposit')}
                    </button>
                </div>
                <button onClick={handleLogout}>{t('logout')}</button>
            </div>

            <div className={styles.bonusList}>
                {eligibleBonuses.length > 0 ? (
                    eligibleBonuses.map((bonus) => (
                        <div key={bonus.id} className={styles.bonusCard}>
                            <h3>{bonus.name[i18n.language]}</h3>
                            <p>{bonus.description[i18n.language]}</p>
                        </div>
                    ))
                ) : (
                    <p>{t('noBonuses')}</p>
                )}
            </div>
        </div>
    );
}