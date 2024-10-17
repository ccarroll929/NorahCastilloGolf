import { Box, Text, VStack, Heading, Grid , Flex} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "golf-placeholder.png",
    name: "Player Bio", 
    paragraph: "My name is Norah Castillo and I am a passionate and dedicated golfer in the Class of [Graduation Year] from [High School Name] in [City, State]. Since picking up a club at the age of 10, I’ve been committed to improving my game both on and off the course. I thrive in competitive environments and am always striving to improve my skills, whether it’s through practice, team play, or tournament competition. Golf has taught me the value of discipline, mental toughness, and perseverance, and I apply those lessons to my academics and other aspects of my life. Balancing school and sports has strengthened my time management skills, and I currently maintain a [Your GPA] GPA while participating in [include other extracurricular activities]. My goal is to play golf at the college level and further my golfing career",
    bioCategories: [
      { title: "Class", description: "YYYY" },
      { title: "Height", description: "X'X\"" },
      { title: "Weight", description: "X lbs" },
      { title: "Date of Birth", description: "M DD, YYYY" },
      { title: "Place of Birth", description: "City, State" },
      { title: "High School", description: "High School Name" },
      { title: "Team", description: "Team Name" },
      { title: "GPA", description: "Enter GPA"}
    ],
  };

  return (
    <VStack
      spacing={10}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12} 
    >
      <Heading fontSize="3xl" fontWeight="light" color="#ebebeb" fontFamily="'Roboto', system-ui">
        {player.name}
      </Heading>
      <Box bgColor="#ebebeb" padding="50px" borderRadius="12px" borderColor="#000000" borderWidth="5px" width="45%">
        <Text fontSize="xl" color="#000000" fontWeight="200" fontFamily="'Roboto', system-ui" lineHeight="2.5">
          {player.paragraph}
        </Text>
      </Box>
      
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
      {/* <Box
        w={{ base: '90%', md: '400px' }}
        h="500px" 
        minW="350px"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
      > */}
        <MotionBox
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#000000"
          borderWidth="5px"
          minH="500px"
          minW="400px"
          m="5"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }} 
        >
      </MotionBox>
      <MotionBox
        w={{ base: '90%', md: '500px' }}
        h="840px"
        minW="320px"
        m="5"
        bgColor="#ebebeb"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderWidth="5px"
        borderColor="#000000"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }} 
      >
        <Grid gap={4}>
          {player.bioCategories.map((category, index) => (
            <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
              <Text color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="bold">
                {category.title}
              </Text>
              <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontSize="lg" mt={1}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </MotionBox>
      {/* </Box> */}
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
