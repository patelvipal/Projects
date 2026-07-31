import { createContext, useContext, useEffect, useState } from "react";

const RegisteredWebinarsContext = createContext();

export const RegisteredWebinarsProvider = ({ children }) => {
  const [registeredWebinars, setRegisteredWebinars] = useState(() => {
    const stored = localStorage.getItem("registeredWebinars");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "registeredWebinars",
      JSON.stringify(registeredWebinars),
    );
  }, [registeredWebinars]);

  const registerWebinar = (webinar) => {
    const exists = registeredWebinars.some((item) => item.id === webinar.id);

    if (!exists) {
      setRegisteredWebinars((prev) => [...prev, webinar]);
    }
  };

  const removeWebinar = (id) => {
    setRegisteredWebinars((prev) => prev.filter((item) => item.id !== id));
  };

  const isRegistered = (id) => {
    return registeredWebinars.some((item) => item.id === id);
  };

  return (
    <RegisteredWebinarsContext.Provider
      value={{
        registeredWebinars,
        registerWebinar,
        removeWebinar,
        isRegistered,
      }}
    >
      {children}
    </RegisteredWebinarsContext.Provider>
  );
};

export const useRegisteredWebinars = () => {
  return useContext(RegisteredWebinarsContext);
};
