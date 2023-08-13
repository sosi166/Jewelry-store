import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import lng_hy from "./translation/hy/lng.json";
import lng_en from "./translation/en/lng.json";

import store from "./Redux/store";
import { Provider } from "react-redux";

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbacking: "en",
    resources: {
        en: {
            lng: lng_en
        },
        hy: {
            lng: lng_hy
        }
    },
    detection: {
        caches: ['cookie']
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <App />
            </Provider>
        </I18nextProvider>
    </React.StrictMode>
);
