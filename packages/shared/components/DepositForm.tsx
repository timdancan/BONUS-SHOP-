'use client';
import {useUserStore} from "../stores/userStore";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import { useRouter } from 'next/navigation';

import styles from '../styles/Deposit.module.scss';
import '../utilits/i18n';
import cn from "classnames";

export default function DepositPage({ brand }: { brand: 'cosmoswin' | 'betfinal' }) {
    const { user, updateUser } = useUserStore();
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [amount, setAmount] = useState<number>(0);

    if (!user) {
        router.push('/');
        return null;
    }

    const handleDeposit = (e: React.FormEvent) => {
        e.preventDefault();
        if (amount < 1) return;

        const updatedUser = {
            ...user,
            depositCount: user.depositCount + 1,
            currentBalance: user.currentBalance + amount,
        };

        updateUser(updatedUser);

        router.push('/bonus-shop');
    };

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    };

    return (
        <div className={cn(styles.container, brand === 'cosmoswin' ? styles.cosmoswin : styles.betfinal)}>
            <header className={styles.header}>
                <h1>{t('deposit')}</h1>
                <button onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'عربي' : 'English'}
                </button>
            </header>

            <form className={styles.form} onSubmit={handleDeposit}>
                <input
                    type="number"
                    placeholder={t('enterAmount')}
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                    required
                    min={1}
                />
                <button type="submit">{t('deposit')}</button>
            </form>
        </div>
    );
}