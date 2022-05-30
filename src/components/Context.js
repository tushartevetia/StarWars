import React, { createContext, useEffect, useState } from 'react'

export const planetContext = createContext()

function Context({children}) {
    const [userdata, setUserData] = useState([]);
    const [isloggedin, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const people = async () => {
        await fetch("https://swapi.dev/api/people")
          .then((res) => res.json())
          .then((res) => setUserData(res.results));
      };
      people();
    }, []);
    
  return (
    <planetContext.Provider value={{userdata,setUserData,isloggedin,setIsLoggedIn}}>
{children}
    </planetContext.Provider>
  )
}

export default Context