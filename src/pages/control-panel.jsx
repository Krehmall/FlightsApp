import React, { useState, useContext, useEffect } from "react";
import { Container, Flex } from "@chakra-ui/react";
import Flight from "../components/Flight";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { Context } from "../provider";

const ControlPanel = () => {
  const navigate = useNavigate();
  const { access, flightsData } = useContext(Context);

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex justify="space-between">
          <NavBar />
          <Flex wrap="wrap" alignItems="center" gap="4" justify="center">
            {flightsData.map((flight) => (
              <Flight key={flight.flightNumber} flight={flight} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ControlPanel;
