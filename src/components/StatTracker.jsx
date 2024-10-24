import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    avgscore: '',
    avgdrivingdistance: '',
    drivingaccuracy: '',
    longestdrive: '',
    avgstrokesperhole: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      avgscore: '',
      drivingdistance: '',
      drivingaccuracy: '',
      longestdrive: '',
      avgstrokesperhole: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#ebebeb" fontFamily="'Roboto', system-ui">
        Golf Stat Tracker
      </Heading>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#ebebeb"
        minW="380px"
        maxW="700px"
        borderRadius="12px"
        borderColor="#000000"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Heading fontSize="2xl" color="#000000" fontFamily="'Roboto', system-ui" mb={4}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No game stats added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#00330b" fontWeight="bold" fontFamily="'Roboto', system-ui">
                  Game {index + 1} - Norah Castillo:
                </Text>
                <Text color="#00330b">Team: {game.team}</Text>
                <Text color="#00330b">Opponent: {game.opponent}</Text>
                <Text color="#00330b">Date: {game.date}</Text>
                <Text color="#00330b">Average Score: {game.avgscore}</Text>
                <Text color="#00330b">Average Driving Distance: {game.avgdrivingdistance}</Text>
                <Text color="#00330b">Driving Accuracy: {game.drivingaccuracy}</Text>
                <Text color="#00330b">Longest Driving Distance: {game.longestdrive}</Text>
                <Text color="#00330b">Average Number of Strokes Per Hole: {game.avgstrokesperhole}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#00B2A9"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        minW="380px"
        maxW="700px"
        borderRadius="12px"
        borderColor="#000000"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Team
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Date
            </FormLabel>
            <Input
              type="date"
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter game date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Average Score Per Game
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={stats.avgscore}
              name="avgscore"
              onChange={handleInputChange}
              placeholder="Enter average score total"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Average Driving Distance
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={stats.avgdrivingdistance}
              name="avgdrivingdistance"
              onChange={handleInputChange}
              placeholder="Enter average driving distance"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Driving Accuracy
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={stats.drivingaccuracy}
              name="drivingaccuracy"
              onChange={handleInputChange}
              placeholder="Enter driving accuracy percentage"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Longest Driving Distance
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={stats.longestdrive}
              name="longestdrive"
              onChange={handleInputChange}
              placeholder="Enter longest driving distance"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl" fontWeight="semibold">
              Average Strokes Per Hole
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              value={stats.avgstrokesperhole}
              name="avgstrokesperhole"
              onChange={handleInputChange}
              placeholder="Enter average # of strokes per hole"
            />
          </FormControl>
          <Button
            onClick={handleAddGame}
            mt={4}
            bgColor="#000000"
            height="50px"
            color="#ebebeb"
            fontFamily="'Roboto', system-ui"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#000000"
            borderWidth="4px"
            _hover={{ bgColor: "#00330b", color: "#ebebeb"}}
          >
            Add Game Stats
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
