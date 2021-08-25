import React, { useContext, useState } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState({});

    return (
        <AppContext.Provider value={{ loggedUser, setLoggedUser }}>
            {children}
        </AppContext.Provider>
    );
};

const useWhatsAppContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useWhatsAppContext };
