import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuthState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(user => {
            setIsLoggedIn(Boolean(user));
        });

        return () => unsubscribe();
    }, []);

    return isLoggedIn;
}

export default useAuthState;
