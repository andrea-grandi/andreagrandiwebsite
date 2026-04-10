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
import Section from '../../components/section' 

const Work = () => (
  <Layout title="Smart Robotics">
    <Container>
      <Title>
        Rover Tracking <Badge>November 2025 - January 2026</Badge>
      </Title>

      <Section>
         <Heading as="h4" fontSize={16} my={6}>
          <Center>Smart Robotics Project 2024/2025</Center>
        </Heading>
      </Section>

      <Section delay={0.1}>
        <P>
        Rover Tracking is a Smart Robotics project focused on the development of an
        autonomous mobile robot capable of tracking objects in a simulated domestic
        environment using ROS2, Gazebo, and OpenCV.
      </P>

      <P>
        The system is based on a differential-drive robot model equipped with an RGB
        camera and LiDAR sensor, described through URDF/Xacro and simulated inside
        Gazebo. ROS2 provides the modular communication architecture between perception,
        control, mapping, and navigation components.
      </P>

      <P>
        Mapping and localization are performed using SLAM Toolbox, while autonomous
        navigation relies on the Navigation2 framework. Object tracking is implemented
        through a computer vision pipeline based on the OpenCV CSRT algorithm, enabling
        the robot to follow a target in real time by estimating its position from camera
        images and adjusting angular velocity accordingly.
      </P>

      <P>
        Simulation results demonstrate effective tracking performance in controlled
        environments. Future developments include integrating deep-learning-based tracking
        methods and deploying the system on a real robotic platform.
      </P>
      </Section>
      
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} my={6}>
          Repository
        </Heading>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
            <Link href="https://github.com/andrea-grandi/r2d2" target="_blank">
              Smart Robotics Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Section>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
