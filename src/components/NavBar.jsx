import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";
import { Search2Icon, DeleteIcon, SmallAddIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const navigate = useNavigate();

  const navigateSort = (e) => {
    e.preventDefault();
    navigate("/controlpanel/sort");
  };
  const navigateAdd = (e) => {
    e.preventDefault();
    navigate("/controlpanel/add");
  };
  const navigateDelete = (e) => {
    e.preventDefault();
    navigate("/controlpanel/delete");
  };
  const navigateHome = (e) => {
    e.preventDefault();
    navigate("/controlpanel");
  };
  return (
    <Flex direction="column" minWidth="150px" alignItems="center" gap="5" pr="5">
      <Button leftIcon={<ArrowUpDownIcon />} minWidth="150px" colorScheme="blackAlpha" onClick={navigateHome}>
        All Flights
      </Button>
      <Button leftIcon={<Search2Icon />} minWidth="150px" colorScheme="blackAlpha" onClick={navigateSort}>
        Sort Flights
      </Button>
      <Button leftIcon={<SmallAddIcon />} minWidth="150px" colorScheme="blackAlpha" onClick={navigateAdd}>
        Add Flights
      </Button>
      <Button leftIcon={<DeleteIcon />} minWidth="150px" colorScheme="blackAlpha" onClick={navigateDelete}>
        Delete Flights
      </Button>
    </Flex>
  );
};

export default NavBar;
