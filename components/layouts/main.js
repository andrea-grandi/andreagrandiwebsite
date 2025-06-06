import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Flex} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Andrea Grandi homepage" />
        <meta name="author" content="Andrea Grandi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Andrea Grandi" />
        <meta name="og:title" content="Andrea Grandi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <title>Andrea Grandi - Homepage</title>
      </Head>

      
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>

        {children}

      </Container>
      <Footer />
    </Box>
  )
}

export default Main
