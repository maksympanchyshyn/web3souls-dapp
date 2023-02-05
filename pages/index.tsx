import Head from 'next/head';
import Image from 'next/image';

import { Container, GridContainer, GridItem, Row, Spacer } from '@/components/Layout';
import { Heading, Paragraph } from '@/components/Text';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const featuredSouls = [
    { id: 1, img: '/badge-placeholder.svg' },
    { id: 2, img: '/badge-placeholder.svg' },
    { id: 3, img: '/badge-placeholder.svg' },
  ];
  return (
    <>
      <Head>
        <title>Web3Souls</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>
        <Spacer y={18} />
        <GridContainer gap={14} justify="space-between">
          <GridItem size={7} direction="column">
            <Heading>Proof of Achievements</Heading>
            <Heading gradient="linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%);">
              In your Soul
            </Heading>
            <Spacer y={8} />
            <Paragraph>Collect achievement badges as Soulbound NFTs and build your on-chain reputation</Paragraph>
            <Spacer y={16} />
            <Row>
              <Button onClick={() => router.push('/souls')}>Explore souls</Button>
            </Row>
          </GridItem>
          <GridItem size={5}>
            <Image src="/badge-placeholder.svg" alt="badge-img" width={280} height={420} />
          </GridItem>
        </GridContainer>
        <Spacer y={32} />
        <Row justify="center">
          <Heading size={28}>Notable souls</Heading>
        </Row>
        <GridContainer gap={14} justify="center">
          {featuredSouls.map((soul) => (
            <GridItem key={soul.id}>
              <Image src={soul.img} alt="badge-img" width={200} height={300} />
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </>
  );
}
