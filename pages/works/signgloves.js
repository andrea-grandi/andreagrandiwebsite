import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center, 
  Image,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="signgloves">
    <Container>
      <Title>
        Sign Gloves <Badge>December 2023 - March 2024</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>IoT and 3D Intelligent Systems Project 2023/2024</Center>
      </Heading>

      <Center my={6}>
        <Image src="/images/works/signgloves/signgloves.png" alt="icon" borderRadius="12px"/>
      </Center>

      <P>
        Sign Glove is a system that convert sign language in audio for interactions between deaf people and non-deaf people. Through the use of sensors (flex sensors, microphone, GPS, etc.), it is able to translate sign language. Additionally, it can detect potentially hazardous situations in the environment (such as ambulance sounds, loud noises, or signals of distress) and alert others through the gloves.
      </P>

      <Heading as="h3" fontSize={20} my={6}>
        Components
      </Heading>

      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Controller</Meta>
          <span>Arduino/Esp32 - C++</span>
        </ListItem>
        <ListItem>
          <Meta>Android App</Meta>
          <span>MIT App Inventor</span>
        </ListItem>
        <ListItem>
          <Meta>Web App</Meta>
          <span>Flask - Python</span>
        </ListItem>
        <ListItem>
          <Meta>Prediction</Meta>
          <span>Prophet</span>
        </ListItem>
        <ListItem>
          <Meta>Communications</Meta>
          <span>HTTP/MQTT</span>
        </ListItem>
        <ListItem>
          <Meta>Database</Meta>
          <span>SQLite/CouchDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/signgloves/diagram.png" alt="System Diagram" />
  
      <Heading as="h3" fontSize={20} my={6}>
        Repository
      </Heading>
      <List ml={4} my={4}>
      <ListItem>
        <Meta>GitHub</Meta>
          <Link href="https://github.com/andrea-grandi/iot_project" target="_blank">
            Sign Gloves Project <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={20} my={6}>
        Credits
      </Heading>
      <List ml={4} my={4}>
      <ListItem>
        <Meta>Andrea Grandi</Meta>
        <Link href="https://github.com/andrea-grandi" target="_blank">
          @andrea-grandi <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
      <Meta>Luca Montagnani</Meta>
        <Link href="https://github.com/montaooo" target="_blank">
          @montaooo <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Meta>Daniele Vellani</Meta>
          <Link href="https://github.com/franzione1" target="_blank">
            @franzione1 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
