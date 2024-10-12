import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSignGloves from '../public/images/works/signgloves/signgloves.png'
import thumbTennisDetections from '../public/images/works/tennisdetections/tennisdetections.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem 
            id="SignGloves" 
            title="Sign Gloves" 
            thumbnail={thumbSignGloves}
          >
            Glove that convert LIS signs into speach
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            id="TennisDetections" 
            title="Tennis Detections" 
            thumbnail={thumbTennisDetections}
          >
            Object detections and descriptions for tennis matches
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)
 
export default Works
export { getServerSideProps } from '../components/chakra'

