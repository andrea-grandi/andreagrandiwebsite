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
  Image
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
        <Center>IoT and 3D Intelligent Systems project 2023/2024</Center>
      </Heading>

      <Center my={6}>
        <Image src="/images/works/signgloves/diagram.png" alt="icon" borderRadius="12px"/>
      </Center>


      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
