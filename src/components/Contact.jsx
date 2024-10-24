import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Contact() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={16}
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#ebebeb" fontFamily="'Roboto', system-ui">
        Contact Us
      </Heading>
      
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        minW="370px"
        bgColor="#00B2A9"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#000000"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Grid gap={4}>
          <FormControl id="name">
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl">
              Name
            </FormLabel>
            <Input
              placeholder="Your Name"
              bgColor="#F8F8F8"
              color="#38383d"
              borderColor="#303030"
              borderWidth="3px"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              bgColor="#F8F8F8"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="#000000" fontFamily="'Roboto', system-ui" fontSize="xl">
              Message
            </FormLabel>
            <Textarea
              placeholder="Your Message"
              bgColor="#F8F8F8"
              borderColor="#303030"
              borderWidth="3px"
              color="#ebebeb"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#000000"
            color="#F8F8F8"
            alignSelf="center"
            fontFamily="'Roboto', system-ui"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#000000"
            borderWidth="3px"
            _hover={{ backgroundColor: '#00330b' }}
          >
            Submit
          </Button>
        </Grid>
      </MotionBox>
    </VStack>
  );
}

export default Contact;
