import React, { useState, useEffect, useRef } from "react";

import '../pages/pagecss.css';
import tmIcon from '../assets/icons/TM.png';
import ruIcon from '../assets/icons/RU.png';
import enIcon from '../assets/icons/EN.png';
import { useTranslation } from 'react-i18next';

function LangDrop() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const [selectedLang, setSelectedLang] = useState('ru');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const flags = {
        tm: tmIcon,
        ru: ruIcon,
        en: enIcon,
    };

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') || 'ru';
        setSelectedLang(savedLang);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem('lang', lang);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`lang-dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button className="lang-toggle" data-lang={selectedLang} onClick={toggleMenu}>
                <img
                    loading="lazy"
                    style={{ height: '30px' }}
                    src={flags[selectedLang]}
                    alt={selectedLang.toUpperCase()}
                />
            </button>

            <div
                className={`lang-menu ${typeof window !== 'undefined' && window.innerWidth < 992 ? 'lang-menu--mobile' : ''
                    }`}
            >
                {Object.entries(flags).map(([lang, imgSrc]) => (
                    <button
                        key={lang}
                        className="lang-option lang-btn"
                        data-lang={lang}
                        onClick={() => {
                            handleLangChange(lang);
                            changeLanguage(lang);
                        }}
                    >
                        <img loading="lazy" src={imgSrc} alt={lang.toUpperCase()} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default LangDrop;
