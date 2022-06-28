import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = async () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            let result = await axios.post(`http://localhost:5000/users/check`, { }, { 
            headers: {
                'token': user
            }
        });
            user = result.data;
            setUser(user);
        }
        else {
            user = JSON.parse(sessionStorage.getItem("user"));
            if (user) {
                let result = await axios.post(`http://localhost:5000/users/check`, { }, { 
                headers: {
                    'token': user
                }
            });
                user = result.data;
                setUser(user);
            }
            else{
                setUser(null);
            }
        }
    }

   useEffect(() => {
     updateUser();
   }, []);

//    useEffect(() => {
//     console.log(user)
//   }, [user]);
   
    
    return (
        <UserContext.Provider value={{ user, updateUser }}>
        {children}
        </UserContext.Provider>
    );
}

export default UserProvider;