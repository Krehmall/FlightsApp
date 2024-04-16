import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Flex, Input, Button, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { Context } from "../provider";
import { SmallAddIcon } from "@chakra-ui/icons";

const AddPage = () => {
  const navigate = useNavigate();
  const { access, flightsData, setFlightsData } = useContext(Context);
  const flightNumberRef = useRef(null);
  const companyRef = useRef(null);
  const passagersAmountRef = useRef(null);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const flightNumber = flightNumberRef.current.value;
    const aviaCompany = companyRef.current.value;
    const passagersAmount = passagersAmountRef.current.value;

    if (passagersAmount <= 0 || passagersAmount > 450 || isNaN(passagersAmount)) {
      setErrorText("Passegers must be within a range 1-450 !!!");
      setShowError(true);
    } else if (aviaCompany === "") {
      setErrorText("Company name input is empty !!!");
      setShowError(true);
    } else if (flightNumber.length !== 5 || isNaN(flightNumber)) {
      setErrorText("Flight number can be only of 5 digits !!!");
      setShowError(true);
    } else if (flightsData.find((flight) => flight.flightNumber === +flightNumber)) {
      setErrorText("Flight number is already exist !!!");
      setShowError(true);
    } else {
      const newFlight = { flightNumber: +flightNumber, aviaCompany, passagersAmount };
      const updatedFlights = [...flightsData, newFlight];
      setFlightsData(updatedFlights);
      navigate("/controlpanel");
    }
  };

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex justify="space-between">
          <NavBar />
          <form onSubmit={handleSubmit}>
            <Flex direction="column" alignItems="center" gap="2">
              <Input bg="white.900" ref={flightNumberRef} placeholder="Number (5 digits)..." w="100%" />
              <Input bg="white.900" ref={companyRef} placeholder="Company name..." />
              <Input bg="white.900" ref={passagersAmountRef} placeholder="Passagers (1-450)..." />
              <Button leftIcon={<SmallAddIcon />} type="submit" colorScheme="whatsapp">
                Add Flight
              </Button>
            </Flex>
          </form>
        </Flex>
        {showError ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{errorText}</AlertTitle>
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default AddPage;
