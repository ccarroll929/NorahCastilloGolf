/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#000000"
          borderWidth="6px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#F8F8F8"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#000000"
          borderWidth="6px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#ebebeb" fontFamily="'Roboto', system-ui">
            {name}
          </Text> */}
          <Text mt={4} color="#00330b" fontFamily="'Roboto', system-ui" fontSize="2xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is a 3-time Golf State Champion."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is known for her impressive driving distance, averaging 320 yards off the tee."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is a master on the course, consistently among the top in her putting accuracy."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo dedicates hours perfecting her swing mechanics and putting technique after every practice."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo has shown impressive driving accuracy, with a 75% greens-in-regulation rate."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo performs exceptionally well under pressure, known for delivering clutch performance in the final round."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo has a career scoring average of 69.8 with over 100 cuts made on tour."
    },
    {
      frontImg: "../golf-placeholder.png",
      name: "Norah Castillo",
      bio: "Norah Castillo is a consistent performer with a strong all-around game, rarely missing a cut."
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="3xl" fontWeight="medium" color="#ebebeb" fontFamily="'Roboto', system-ui">
        Player Cards    
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="#ebebeb" fontFamily="'Roboto', system-ui">
        Click on a card to see player card info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
