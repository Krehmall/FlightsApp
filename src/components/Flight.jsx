import React from "react";
import { Heading, Container, Square, Text, Flex, Button, Spacer, Box } from "@chakra-ui/react";

const Flight = ({ flight }) => {
  return (
    <Box>
      <Square p="4" bg="black" size="170px" borderRadius="md">
        <Flex direction="column">
          <Text color="white">Flight : {flight.flightNumber}</Text>
          <Text color="white">Company : {flight.aviaCompany}</Text>
          <Text color="white">Passagers : {flight.passagersAmount}</Text>
        </Flex>
      </Square>
      {/* <Spacer /> */}
    </Box>
  );
};

export default Flight;
