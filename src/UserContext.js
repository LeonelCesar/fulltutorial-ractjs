import { Children, createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ Children }) => {
  const [author] = useState({
    name: "Leonel César",
    email: "henriquetacesar456@gmail.com",
    dob: "23/02/2025",
  });

  return <UserContext.Provider value={author}></UserContext.Provider>;
};

export const useUser = () => useContext(useContext);
