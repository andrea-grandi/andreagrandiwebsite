import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an AI engineer based in Italy!
      </Box>

       <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrea Grandi
          </Heading>
          <p></p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/profile.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        Hi! I&apos;m Andrea Grandi, a passionate and dedicated individual with a background in computer science and a focus on artificial intelligence. I completed my high school education at the Enrico Fermi Institute in Modena in 2019 and went on to earn my bachelor's degree in Computer Engineering from the University of Modena and Reggio Emilia (UniMoRe). Currently, I am pursuing a master's degree in Artificial Intelligence Engineering at UniMoRe, where I am continuously expanding my knowledge in this rapidly evolving field. My academic journey has provided me with a solid theoretical and practical foundation, and I am excited to apply my skills and expertise to real-world challenges in AI.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Modena, Italy.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          High school degree at I.T.I.S Enrico Fermi, Modena.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          BSc in Computer Engineering at UniMoRe.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          MSc in Artificial Intelligence Engineering at UniMoRe.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          AI, Basketball, Motor Racing
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/andrea-grandi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @andrea-grandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Andrea Grandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/andre_g00" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @andre_g00
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

  <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <Paragraph>
          Feel free to reach out at <Link href="mailto:andrea.grandi.ai@gmail.com">andrea DOT grandi DOT ai AT gmail DOT com</Link>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
