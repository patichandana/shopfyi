import { createContext, useContext, useState } from "react";

const CurrentPageDisplayed = createContext("home");

export function checkCurrentPageDisplayed () {
    return useContext(CurrentPageDisplayed)
}

export function CurrentPage() {
    const [currentDisplayedPage, setCurrentDisplayedState] = useState('home');

    const setPage = (page) => {
        setCurrentDisplayedState(page)
    }

    
}