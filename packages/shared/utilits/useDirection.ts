'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useDirection() {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }, [i18n.language]);
}