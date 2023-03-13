import styles from '@/styles/Home.module.css'
import {Navbar, Title, SimpleGrid, Group, Button, CopyButton, Image, BackgroundImage, Container, Center, Popover, Space, Text, NavLink} from '@mantine/core'
import {IconBrandTwitter} from '@tabler/icons'


export default function Home() {
  return (
  <>
  <Navbar height='8vh' width={{base:'vw'}}>
    <Group position='center'>
    <Navbar.Section ><NavLink label='Schedule' component='a' target="_blank" href="https://calendly.com/byronrwc/code-tutoring"/></Navbar.Section>
    <Navbar.Section>
      <NavLink label='Contact'>
        <NavLink label='Twitter' component='a' target='_blank' href='https://twitter.com/Byron__Corbett'/>
        <CopyButton value='byronrwc@pythontutoring.ca'>
          {({copied, copy}) => (
                <Button onClick={copy}>
                  {copied ? 'Copied' : 'Copy Email'}
                </Button>
              )}
        </CopyButton>
      </NavLink>
    </Navbar.Section>
    </Group>
  </Navbar>

  <Space h='12vh' />

  <Center>
    <SimpleGrid cols={2}>
      <Container>
        <Title size='h3'>About My Service!</Title>
        <Text>
          My service is about helping you learn the basics and fundamentals of coding in a chill, relaxed environment.
          What are variables? What are functions? What the heck is a Class!? I will help you learn what these are through fun little projects using Python!
          <br/><br/>
          Python is an easy to read, write, and understand coding language, it's basically English! What you learn with me using Python can be applied to other
          coding languages, or help you understand our ever increasing digital world!
          <br/><br/>
          You will need a laptop, and I will help set up needed software.
        </Text>
      </Container>
      <Container>
        <Image className={'profile-image'} src="profilePic.jpg" alt="Photo of me" withPlaceholder={true} width={150} height={150} radius="md"/>
        <Title size='h3'>Hello! I'm Byron,</Title>
        <Text>
          I'm a local, born in the Westshore area. I work at an awesome local tech company that teaches kids programming and STEM
          while pursuing education and personal goals in life. My passions and interests revolve around computers, science, video games, and technology in general.
          I have been self-teaching coding for 2 years now, and have some projects under my belt. I'm looking to sharpen my skills by helping
          those in the community either start their coding journey, or better understand the coding sphere.
        </Text>
      </Container>
    </SimpleGrid>
  </Center>
  </>
  );
};
