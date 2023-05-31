import React, { useState } from "react";
import AuthContext from "./context";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
