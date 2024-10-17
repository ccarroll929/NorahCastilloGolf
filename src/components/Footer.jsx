import { Link } from 'react-router-dom';
import { IconButton, Flex, Box } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  return (
    <Box>
    <footer className="footer">
      <div className="footer-content">
          <Flex justify="space-between" mt="1" direction={['column', 'row']} gap="1rem"> 
          <div className="footer-logo">©2024 Norah Castillo</div>
          <Flex alignItems="center">
          <IconButton 
              as={Link}
              to="https://facebook.com" 
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="#000000"
              fontSize="24px"
              _hover={{ color: 'blue.500' }} 
            />
            <IconButton 
              as={Link}
              to="https://instagram.com" 
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="#000000"
              fontSize="24px"
              _hover={{ color: 'pink.500' }} 
            />
            <IconButton 
              as={Link}
              to="https://snapchat.com" 
              aria-label="Snapchat"
              icon={<FaSnapchatGhost />}
              variant="ghost"
              color="#000000"
              fontSize="24px"
              _hover={{ color: 'yellow' }} 
            />
          </Flex>
          <Flex alignItems='center' justifyContent={['center', 'flex-end']}>
          <div><span className="tilt-prism-footer">Athlete X Elite</span></div>
          </Flex>
          </Flex>
      </div>
    </footer>
    </Box>
  );
}

export default Footer;
