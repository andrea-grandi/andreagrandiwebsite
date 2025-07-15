import { Container, Heading, SimpleGrid, Divider, Box, VStack, HStack, Input, Button, Text, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSignGloves from '../public/images/works/signgloves/signgloves.png'
import thumbTennisDetections from '../public/images/works/tennisdetections/tennisdetections.png'
import thumbBioinformatics from '../public/images/works/bioinformatics/wsi.png'
import thumbDai from '../public/images/works/dai/dai.png'
import thumbSR from '../public/images/works/smartrobotics/smart_robotics.png'
import thumbSentiment from '../public/images/works/sentimentanalysis/sa.png'

const Works = () => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const chatBg = useColorModeValue('gray.50', 'gray.800')
  const messageBg = useColorModeValue('blue.100', 'blue.600')
  const botMessageBg = useColorModeValue('gray.200', 'gray.600')
  
  const sendMessage = async () => {
    if (!inputMessage.trim()) return
    
    const userMessage = { type: 'user', content: inputMessage }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    
    try {
      const response = await fetch(`http://${process.env.NEXT_PUBLIC_SERVER}:8000/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })
      
      const data = await response.json()
      const botMessage = { type: 'bot', content: data.reply || 'Sorry, I couldn\'t process that.' }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = { type: 'bot', content: 'Sorry, there was an error connecting to the chat service.' }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }
  
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        
        {/* Chat Interface */}
        <Box
          bg={chatBg}
          p={4}
          borderRadius="lg"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          mb={6}
        >
          <Heading as="h4" size="md" mb={3}>
            Chat with AI Assistant
          </Heading>
          
          {/* Chat Messages */}
          <Box
            height="200px"
            overflowY="auto"
            mb={3}
            p={2}
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="md"
            border="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
          >
            {messages.length === 0 ? (
              <Text color="gray.500" textAlign="center" mt={4}>
                Start a conversation about my projects!
              </Text>
            ) : (
              <VStack align="stretch" spacing={2}>
                {messages.map((message, index) => (
                  <Box key={index}>
                    <Box
                      alignSelf={message.type === 'user' ? 'flex-end' : 'flex-start'}
                      bg={message.type === 'user' ? messageBg : botMessageBg}
                      p={2}
                      borderRadius="md"
                      maxWidth="80%"
                      ml={message.type === 'user' ? 'auto' : '0'}
                      mr={message.type === 'bot' ? 'auto' : '0'}
                    >
                      <Text fontSize="sm" fontWeight="bold" mb={1}>
                        {message.type === 'user' ? 'You' : 'AI'}
                      </Text>
                      <Text fontSize="sm">{message.content}</Text>
                    </Box>
                  </Box>
                ))}
                {isLoading && (
                  <Box
                    bg={botMessageBg}
                    p={2}
                    borderRadius="md"
                    maxWidth="80%"
                  >
                    <Text fontSize="sm" fontWeight="bold" mb={1}>AI</Text>
                    <Text fontSize="sm">Typing...</Text>
                  </Box>
                )}
              </VStack>
            )}
          </Box>
          
          {/* Chat Input */}
          <HStack>
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my projects..."
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              isLoading={isLoading}
              loadingText="Sending"
              disabled={!inputMessage.trim()}
              colorScheme="blue"
            >
              Send
            </Button>
          </HStack>
        </Box>
        
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem 
              id="signgloves" 
              title="Sign Gloves" 
              thumbnail={thumbSignGloves}
            >
              Glove that convert LIS signs into speach
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem 
              id="tennisdetections" 
              title="Tennis Detections" 
              thumbnail={thumbTennisDetections}
            >
              Object detections and descriptions for tennis matches
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem 
              id="bioinformatics" 
              title="Bioinformatics" 
              thumbnail={thumbBioinformatics}
            >
              Multiple instance learning with contextual knowledge
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem 
              id="dai" 
              title="Distributed AI" 
              thumbnail={thumbDai}
            >
              Distributed Artificial Intelligence Project
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem 
              id="smartrobotics" 
              title="Smart Robotics" 
              thumbnail={thumbSR}
            >
              Smart Robotics Project
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
 
export default Works
export { getServerSideProps } from '../components/chakra'
