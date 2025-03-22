import {
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
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Section from '../../components/section'

const Work = () => (
  <Layout title="Tennis Detections">
    <Container>
      <Title>
        Tennis Detections <Badge>May 2024 - July 2024</Badge>
      </Title>


      <Section>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Computer Vision and Cognitive Systems Project 2023/2024</Center>
        </Heading>
      </Section>
      
      <Section delay={0.1}>
        <P>
        The accurate detection and description of players and balls in tennis match images 
        is crucial for detailed match analysis. This project addresses the challenge of 
        achieving high-quality detection of tennis players and balls to facilitate comprehensive 
        analysis of tennis matches, including tracking in video data. Our approach leverages the YOLO 
        (You Only Look Once) model for object detection and the BLIP model for generating natural 
        language descriptions that capture the spatial relationships between detected objects on the court.
        </P>
        <P>
        To enhance our analysis, we incorporated a tracking component using TrackNet, 
        allowing us to extend the detection capabilities to video data and analyze the 
        continuous movements of players and balls. This holistic approach ensures that both 
        static and dynamic aspects of tennis matches are effectively captured.
        </P>
        <P>
        Our results demonstrate that the combined use of YOLO and BLIP models achieves 
        remarkable accuracy and speed in detecting players and balls. The YOLO model's state-of-the-art 
        performance in object detection, coupled with BLIP's ability to generate detailed spatial descriptions, 
        provides a robust solution for tennis match analysis. Additionally, the integration of TrackNet for 
        tracking significantly enhances the system's applicability to real-time and recorded videos, 
        offering a comprehensive tool for tennis analytics.
        </P>
      </Section>
      
      <Section delay={0.2}>
      <Heading as="h3" fontSize={20} my={6}>
        Repository
      </Heading>
      <List ml={4} my={4}>
      <ListItem>
        <Meta>Repository</Meta>
          <Link href="https://github.com/andrea-grandi/cvcs_project" target="_blank">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={20} my={6}>
        Paper
      </Heading>
      <List ml={4} my={4}>
      <ListItem>
        <Meta>Paper</Meta>
          <Link href="https://github.com/andrea-grandi/cvcs_project/blob/master/paper/Tennis_Player_and_Ball_Analysis.pdf" target="_blank">
            Github <ExternalLinkIcon mx="2px" />
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
      <Meta>David Wuttke</Meta>
        <Link href="https://github.com/DInoWDave" target="_blank">
          @DInoWDave <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Meta>Daniele Vellani</Meta>
          <Link href="https://github.com/franzione1" target="_blank">
            @franzione1 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      </Section>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
