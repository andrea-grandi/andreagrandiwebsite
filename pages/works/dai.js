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
  <Layout title="Distributed AI">
    <Container>
      <Title>
        Distributed Artificial Intelligence Project <Badge></Badge>
      </Title>

      <Section>
         <Heading as="h4" fontSize={16} my={6}>
          <Center>Distributed AI Project 2024/2025</Center>
        </Heading>
      </Section>

      <Section delay={0.1}>
        <P>
          I've implemented a NetLogo simulation based on "Analysing honeybees’ division of labour in broodcare by a multi-agent model" by Schmickl et al. paper. 

          Abstract:
      We describe a multi-agent model of a honeybee colony and show several applications of the model that simulate experiments that have been performed with real honeybees. Our special emphasis was on the decentralized, self-organized regulation of brood nursing, which we successfully simulated: We found that brood manipulations, food-deprivation experiments and colony-size manipulations can be explained by the mechanisms we implemented into our model described here. Our agents can perform various tasks (foraging, storing, nursing). The model is spatially resolved, and contains a designated broodnest area as well as a designated honey/nectar storage area. All bees (and larvae) consume nectar/honey at a task-specific rate, allowing us to track the flow of nectar through the colony. Several kinds of stimuli, which are important for division of labour, were modelled in detail: dances, contact stimuli and chemical signals.
        </P>
      </Section>
      
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} my={6}>
          Repository
        </Heading>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
            <Link href="https://github.com/andrea-grandi/dai_project" target="_blank">
              Distributed AI Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Section>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
