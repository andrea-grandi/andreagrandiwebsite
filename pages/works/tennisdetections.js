import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="tennisdetections">
    <Container>
      <Title>
        Tennis Detections <Badge>May 2024 - July 2024</Badge>
      </Title>

      <P>
        The accurate detection and description of players and balls in tennis 
        match images is crucial for detailed match analysis. This project addresses 
        the challenge of achieving high-quality detection of tennis players and balls 
        to facilitate comprehensive analysis of tennis matches, including tracking in 
        video data. Our approach leverages the YOLO (You Only Look Once) model for 
        object detection and the BLIP model for generating natural language descriptions 
        that capture the spatial relationships between detected objects on the court.
      </P>

      

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
