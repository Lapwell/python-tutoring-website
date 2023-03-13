import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {Navbar, SimpleGrid, Group, Button, CopyButton, Image, Container, Center, Popover, Space, Text, BackgroundImage} from '@mantine/core'
import {IconBrandTwitter} from '@tabler/icons'

//https://calendly.com/byronrwc/code-tutoring

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar height='8vh' width={{base:'vw'}}>
          <Group position='center'>
            <Navbar.Section><Link target='_blank' href='https://calendly.com/byronrwc/code-tutoring'>Schedule</Link></Navbar.Section>
            <Navbar.Section>
              <Popover position='bottom' withArrow>
                <Popover.Target><Button>Contacts</Button></Popover.Target>
                <Popover.Dropdown>
                  <Button component='a' target='_blank' href='https://twitter.com/Byron__Corbett'>Twitter</Button>
                  <CopyButton value='byronc@pythontutoring.ca'>
                    {({copied, copy}) => (
                      <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                        {copied ? 'Copied' : 'Copy Email'}
                      </Button>
                    )}
                  </CopyButton>
                </Popover.Dropdown>
              </Popover>
            </Navbar.Section>
          </Group>
        </Navbar>
        <Space h='16vh' />

        <Center>
          <SimpleGrid cols={2}>
            <Container>
              <h3>About My Service</h3>
              <Text>
                My service is about helping you learn the basics and fundamentals of coding in a chill, relaxed environment.
                What are variables? What are functions? What the heck is a Class!? I will help you learn what these are through fun little projects using Python!
                <br/><br/>
                Python is an easy to read and write coding language, it's basically English! What you learn with me using Python can be applied
                to any other language you learn in the future, giving you a solid boost to your future with coding.
                <br/><br/>
                No previous experience required. You will need a your own laptop.
              </Text>
            </Container>
            <Container>
              <h3>About Myself</h3>
              <Image src="temp-profile.jpg" alt="Photo of me" width={100} height={100}/>
              <Text>
                Hello, I'm Byron! I'm a local, born here on the island in the Westshore area. I work for a local tech company that teaches kids programming and STEM
                while I pursue education and personal goals.
                <br/> <br/>
                My passion and interests are in computers, science and games. I have been self-teaching coding for about 2 years now.
                I look forward to helping others start their journey with programming!
              </Text>
            </Container>
          </SimpleGrid>
        </Center>

      </main>
    </>
  );
};
