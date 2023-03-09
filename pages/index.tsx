import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {Navbar, SimpleGrid, Group, Button, CopyButton, Image, Container, Center, Popover, Space, Text} from '@mantine/core'
import {IconBrandTwitter} from '@tabler/icons'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar height='6vh' width={{base:'vw'}}>
          <Group position='center'>
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
            <Container size='sm'>
              <Center>
                <h3>About myself</h3>
              </Center>
              <Text ta='center'>I'm a young adult living in the Langford area, I am currently working for a local company that teaches kids about coding while I develop my skills.
                I have a passion for technology, science, games, and sharing my interests. I am looking to teach teens about the Python coding language,
                helping them develop their skills, learn about coding, and enjoy their passion to the fullest.
              </Text>
            </Container>
            <Space h='8vh'/>
            <Container size='xs'>
              <Center>
                <h3>My Schedule</h3>
              </Center>
              <Text ta="center">
                I do session Friday-Monday in coffee shops and libraries in the Langford area. My regular hours are 10am-1pm.
              </Text>
            </Container>
          </SimpleGrid>
        </Center>
      </main>
    </>
  );
};
