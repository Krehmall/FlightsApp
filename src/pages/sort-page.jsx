import React, { useContext, useEffect, useState } from "react";
import { Container, Flex, Input, Select } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Flight from "../components/Flight";
import { useNavigate } from "react-router-dom";
import { Context } from "../provider";

const SortPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { access, flightsData } = useContext(Context);
  const [filteredFlightsData, setFilteredFlightsData] = useState(flightsData);

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, []);

  const handleSearchChange = (e) => {
    const searchReq = e.target.value.trim();
    setSearch(searchReq);
    if (searchReq !== "") {
      console.log(searchReq);
      let dataUpdated = flightsData.filter((flight) => flight.aviaCompany.toLowerCase().includes(searchReq.toLowerCase()));
      setFilteredFlightsData(dataUpdated);
    } else {
      setFilteredFlightsData(flightsData);
    }
  };

  const handleFilterChange = (e) => {
    let dataUpdated = filteredFlightsData;
    if (e.target.value === "lessPass") {
      dataUpdated.sort((a, b) => a.passagersAmount - b.passagersAmount);
    }
    if (e.target.value === "morePass") {
      dataUpdated.sort((a, b) => b.passagersAmount - a.passagersAmount);
    }
    if (e.target.value === "noSort") {
      dataUpdated.sort((a, b) => b.flightNumber - a.flightNumber);
    }
    setFilteredFlightsData(dataUpdated);
    setSort(e.target.value);
  };

  return (
    <>
      <Container maxWidth="xl" bg="gray.100" p={4} my={2} borderRadius="md" shadow="md">
        <Flex>
          <NavBar />
          <Flex wrap="wrap" minWidth="100px" alignItems="center" gap="4" justify="center">
            <Input bg="white.900" value={search} onChange={handleSearchChange} placeholder="Search..." size="md" />
            <Select size="md" bg="white.900" onChange={handleFilterChange}>
              <option value="noSort">No sort</option>
              <option value="lessPass">By less passagers </option>
              <option value="morePass">By more passagers</option>
            </Select>
            {filteredFlightsData.map((flight) => (
              <Flight key={flight.flightNumber} flight={flight} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default SortPage;
