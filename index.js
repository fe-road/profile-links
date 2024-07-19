// Constants
const themeAttribute = 'data-theme';
const hiddenClass = 'hidden';

// Auxiliary Functions
const getCurrentTheme = () => {
    return document.querySelector('html').getAttribute(themeAttribute);
};

const isLightTheme = () => {
    const currentTheme = getCurrentTheme();
    return !currentTheme || currentTheme === 'light';
}

const getIconSun = () => document.querySelector('.fa-sun');
const getIconMoon = () => document.querySelector('.fa-moon');
const getThemeButton = () => document.querySelector('#themeButton');

// Main Functions
const switchHtmlTheme = () => {
    const htmlElement = document.querySelector('html');
    if (isLightTheme()) {
        htmlElement.setAttribute(themeAttribute, 'dark');        
    } else {
        htmlElement.setAttribute(themeAttribute, 'light');
    }
};

const addThemeButtonListener = () => {
    const themeButtonElement = getThemeButton();
    themeButtonElement.addEventListener('click', () => {
        switchHtmlTheme();
        getIconSun().classList.toggle(hiddenClass);
        getIconMoon().classList.toggle(hiddenClass);
        themeButtonElement.classList.toggle('dark');
        themeButtonElement.classList.toggle('light');
    });
};

const checkInitialTheme = () => {
    const themeButtonElement = getThemeButton();
    if (isLightTheme()) {
        themeButtonElement.classList.add('light');
        getIconMoon().classList.add(hiddenClass);
    } else {
        themeButtonElement.classList.add('dark');
        getIconSun().classList.add(hiddenClass);
    }
};

checkInitialTheme();
addThemeButtonListener();