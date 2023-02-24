import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {Navbar, SimpleGrid, Group, Button, CopyButton, Image, Container, Center, Popover, Space} from '@mantine/core'
import {IconBrandTwitter} from '@tabler/icons'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar height='6vh' width={{base:'vw'}}>
          <Group position='center'>
            <Navbar.Section><Link href='/'>Home</Link></Navbar.Section>
            <Navbar.Section><Link target='_blank' href='https://calendly.com/python-tutoring/python-tutoring?month=2023-02'>Schedule</Link></Navbar.Section>
            <Navbar.Section>
              <Popover position='bottom' withArrow>
                <Popover.Target><Button>Contacts</Button></Popover.Target>
                <Popover.Dropdown>
                  <Button component='a' target='_blank' href='https://twitter.com/Byron__Corbett'>Twitter</Button>
                  <CopyButton value='byronc@pythontutoring.ca'>
                    {({copied, copy}) => (
                      <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                        {copied ? 'Copied Email' : 'Copy Email'}
                      </Button>
                    )}
                  </CopyButton>
                </Popover.Dropdown>
              </Popover>
            </Navbar.Section>
          </Group>
        </Navbar>
        <Space h='4vh' />
        <Center>
          <SimpleGrid cols={1}>
            <Container>
              <Center>
                <h3>About myself</h3>
              </Center>
                <p>I'm a young adult living in the Langford area, I am currently working for a local company that teaches kids about coding while I develop my skills.
                   I have a passion for technology, science, games, and sharing my interests. I am looking to teach teens about the Python coding language,
                   helping them develop their skills, learn about coding, and enjoy their passion to the fullest.
                 </p>
            </Container>
            <Space h='8vh'/>
            <Container>
              <Center>
                <h3>My Schedule</h3>
              </Center>
              <p>
                I do session Friday-Monday 10am-2pm at coffee shops and libraries in the langford area for teens 15-19. Click Schedule to setup a session with me!
              </p>
            </Container>
          </SimpleGrid>
        </Center>
      </main>
    </>
  );
};
