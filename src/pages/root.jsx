import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Heading, Container } from "@chakra-ui/react";

const Root = () => {
  // const [access, setAccess] = useState(false);
  useEffect(() => {}, []);

  return (
    <main className="main">
      <Container maxW="100%" py={5} bg="black" centerContent>
        <Heading size={"2xl"} color={"white"}>
          Flights
        </Heading>
      </Container>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
