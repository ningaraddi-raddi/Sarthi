import { createContext, useState, useContext } from 'react';
/*
    Removed captain and setCaptain from the context value as requested.
*/
export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to login captain
    const loginCaptain = async (credentials) => {
        setIsLoading(true);
        try {
            // Add your login API call here
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to logout captain
    const logoutCaptain = () => {
        setCaptain(null);
        // Add any cleanup logic here
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        error,
        loginCaptain,
        logoutCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};



// Custom hook to use captain context
export const useCaptainContext = () => useContext(CaptainDataContext);

export default CaptainContext;