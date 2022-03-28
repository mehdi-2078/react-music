import React from 'react';
import i18n from 'services/i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import translationEN from './locals/en/trnslation.json';
import translationFa from './locals/fa/trnslation.json';

function I18n() {
    // const { language } = useSelector((state) => state.languageType);
    const resources = {
        en: {
            translation: translationEN,
        },
        fa: {
            translation: translationFa,
        },
    };

    i18n
        .use(initReactI18next)
        .init({
            resources,
            // lng: language,
            interpolation: {
                escapeValue: false,
            },
        });
}

export default I18n;
