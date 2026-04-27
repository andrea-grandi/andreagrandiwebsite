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
  <Layout title="Portfolio - Diletta Cellurale">
    <Container>
      <Title>
        Portfolio Website - Diletta Cellurale <Badge>April 2026</Badge>
      </Title>
      
      <Section delay={0.1}>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Take a look</Meta>
            <Link href="https://andrea-grandi.github.io/portfolio_diletta/" target="_blank">
              Porfolio <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Section>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
