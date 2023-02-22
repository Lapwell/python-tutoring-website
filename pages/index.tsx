import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react'
import {Navbar, SimpleGrid, Group, Button, CopyButton, Image, Container, Center, Popover, Space, Notification} from '@mantine/core'
import {IconBrandTwitter} from '@tabler/icons'
import {Calendar} from '@mantine/dates'

export default function Home() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <>
      <main className={styles.main}>
        <Navbar height='4vh' width={'vw'}>
          <Group position='center'>
            <Navbar.Section><Link href='/'>Home</Link></Navbar.Section>
            <Navbar.Section><Link href='#'>Schedule</Link></Navbar.Section>
            <Navbar.Section>
              <Popover position='bottom' trapFocus>
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
                <h4>About myself</h4>
              </Center>
              <p>I'm a young adult living in the Langford area, I am currently working for a local company that teaches kids about coding while I develop my skills.
                 I have a passion for technology, science, games and sharing my interests. I am looking to teach teens about the Python coding language;
                 helping them develop their skills, learn about coding and enjoy their passion to the fullest.</p>
            </Container>
            <Space h='10vh'/>
            <Container>
              <Calendar  multiple value={value} onChange={setValue} />
            </Container>
          </SimpleGrid>
        </Center>
      </main>
    </>
  )
}
