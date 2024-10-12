import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

const UnderConstruction = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const iconColor = useColorModeValue('yellow.500', 'yellow.300');

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} align="center" bg={bgColor} p={8} borderRadius="lg" boxShadow="md">
        <Icon as={WarningTwoIcon} w={20} h={20} color={iconColor} />
        <Heading as="h1" size="2xl" textAlign="center">
          Under Construction
        </Heading>
        <Text fontSize="xl" color={textColor} textAlign="center">
          I'm working to bring you something amazing. Please check back soon!
        </Text>
        <Box>
          <Text as="span" fontWeight="bold">
            Estimated Completion: Coming Soon
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default UnderConstruction;