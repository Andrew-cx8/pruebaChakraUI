import React from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import cicla from "./Images/ciclista.jpg";

const Header = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"325px 1fr 30px"}
      gridTemplateColumns={"400px 1fr"}
      h="512px"
      w="1024px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="white" area={"header"}>
        <Image
          objectFit="contain"
          p="2"
          boxSize="auto"
          src={cicla}
          alt="Cicla"
        />
        ;
      </GridItem>
      <GridItem pl="2" p="4" bg="white" area={"nav"}>
        <Image
          objectFit="cover"
          boxSize="full"
          src={cicla}
          alt="Cicla"
          overflow="hidden"
        />
      </GridItem>
      <GridItem pl="2" bg="white" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="white" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Header;
