import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Flex, Input, Button, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { Context } from "../provider";
import { DeleteIcon } from "@chakra-ui/icons";

const DeletePage = () => {
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const flightNumberRef = useRef(null);
  const navigate = useNavigate();
  const { access, flightsData, setFlightsData } = useContext(Context);

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const flightNumber = flightNumberRef.current.value;
    if (!flightsData.find((flight) => flight.flightNumber === +flightNumber)) {
      setErrorText("Flight number is not exist !!!");
      setShowError(true);
    } else {
      const updatedFlights = flightsData.filter((flight) => flight.flightNumber !== +flightNumber);
      console.log(updatedFlights);
      setFlightsData(updatedFlights);
      navigate("/controlpanel");
    }
  };

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex>
          <NavBar />
          <form onSubmit={handleSubmit}>
            <Flex direction="column" alignItems="center" gap="2">
              <Input bg="white.900" ref={flightNumberRef} placeholder="Number (5 digits)..." />
              <Button leftIcon={<DeleteIcon />} type="submit" colorScheme="red">
                Remove Flight
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

export default DeletePage;
