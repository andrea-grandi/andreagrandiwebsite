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
import UnderConstruction from '../../components/under-construction' 

const Work = () => (
  <Layout title="Sentiment Analysis">
    <Container>
      <Title>
        Sentiment Analysis <Badge></Badge>
      </Title>

      <UnderConstruction /> 
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
