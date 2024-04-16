import React, { useContext, useState } from "react";
import { Button, Container, Flex, Input, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Context } from "../provider";

const LoginPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  const { access, setAccess } = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    if (code !== "12345") {
      setShowLoginError(true);
      return;
    }
    setAccess(!access);
    setShowLoginError(false);
    navigate("/controlpanel");
  };

  return (
    <>
      <Container maxW="md" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <form onSubmit={handleClick}>
          <Flex>
            <Input
              bg="white.900"
              value={code}
              type="password"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter PIN code..."
              size="md"
              mr={2}
            />
            <Button leftIcon={<CheckIcon />} type="submit" colorScheme="blackAlpha">
              Enter
            </Button>
          </Flex>
        </form>
        {showLoginError ? (
          <Alert text-align="center" status="error">
            <AlertIcon />
            <AlertTitle>Your PIN code is wrong!</AlertTitle>
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default LoginPage;
