import Head from 'next/head';
import Image from 'next/image';

import { Container, GridContainer, GridItem } from '@/components/Layout';
import { Heading, Paragraph } from '@/components/Text';

export default function Home() {
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
        <GridContainer gap={14} justify="space-between">
          <GridItem size={7} direction="column">
            <Heading>Proof of Achievementss</Heading>
            <Heading>In your Soul</Heading>
            <Paragraph>Collect achievement badges as Soulbound NFTs and build your on-chain reputation</Paragraph>
          </GridItem>
          <GridItem size={5}>
            <Image src="/badge-placeholder.svg" alt="badge-img" width={280} height={420} />
          </GridItem>
        </GridContainer>
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
