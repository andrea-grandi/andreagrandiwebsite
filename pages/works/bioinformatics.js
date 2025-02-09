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
  <Layout title="Bioinformatics">
    <Container>
      <Title>
        Artificial Intelligence in Bioinformatics Project <Badge></Badge>
      </Title>

      <Section>
         <Heading as="h4" fontSize={16} my={6}>
          <Center>AI for Bioinformatics Project 2024/2025</Center>
        </Heading>

      </Section>

      <Section ddelay={0.1}>
      <P>

      The visual examination of histopathological images is a cornerstone of cancer diagnosis, requiring pathologists to analyze tissue sections across multiple magnifications to identify tumor cells and subtypes. However, existing attention-based Multiple Instance Learning (MIL) models for Whole Slide Image (WSI) analysis often neglect contextual and numerical features, resulting in limited interpretability and potential misclassifications. Furthermore, the original MIL formulation incorrectly assumes the patches of the same image to be independent, leading to a loss of spatial context as information flows through the network. Incorporating contextual knowledge into predictions is particularly important given the inclination for cancerous cells to form clusters and the presence of spatial indicators for tumors. To address these limitations, we propose an enhanced MIL framework that integrates pre-contextual numerical information derived from semantic segmentation. Specifically, our approach combines visual features with nuclei-level numerical attributes, such as cell density and morphological diversity, extracted using advanced segmentation tools like Cellpose. These enriched features are then fed into a modified BufferMIL model for WSI classification. We evaluate our method on subtyping non-small cell lung cancer (TCGA-NSCLC) and detecting lymph node metastases (CAMELYON16 and CAMELYON17).

      </P>
      <Section>

      <Section delay={0.2}>

        <Heading as="h3" fontSize={20} my={6}>
          Repository
        </Heading>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
            <Link href="https://github.com/andrea-grandi/bio_project" target="_blank">
              AI for Bioinformatics Project <ExternalLinkIcon mx="2px" />
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
