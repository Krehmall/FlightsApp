import React from "react";
import { createContext, useState } from "react";

const Context = createContext(null);

const Provider = ({ children }) => {
  const flights = [
    { flightNumber: 12345, aviaCompany: "Elal", passagersAmount: 300 },
    { flightNumber: 78899, aviaCompany: "Turkish Airlines", passagersAmount: 450 },
    { flightNumber: 77772, aviaCompany: "Canada Avia", passagersAmount: 100 },
    { flightNumber: 23333, aviaCompany: "Chunga-Changa", passagersAmount: 1 },
  ];
  const [flightsData, setFlightsData] = useState(flights);
  const [access, setAccess] = useState(false);

  const value = { access, setAccess, flights, flightsData, setFlightsData };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Provider, Context };
