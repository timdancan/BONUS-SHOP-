'use client';

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import {useUserStore} from "../stores/userStore";
import cn from 'classnames';

import styles from '../styles/Login.module.scss';

import '../utilits/i18n';

const LoginForm = ({ brand }: { brand: 'cosmoswin' | 'betfinal' }) => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const login = useUserStore((state) => state.login);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username.trim());
        setUsername('');
        router.push('/bonus-shop');
    };

    return (
        <form className={cn(styles.loginForm, brand === 'cosmoswin' ? styles.cosmoswin : styles.betfinal)} onSubmit={handleSubmit}>
            <h2>{t('login')}</h2>
            <input
                type="text"
                placeholder={t('usernamePlaceholder')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <button type="submit">{t('login')}</button>
        </form>
    );
};

export default LoginForm;