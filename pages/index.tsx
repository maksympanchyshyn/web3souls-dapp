import Head from 'next/head';
import Image from 'next/image';

import { Container, Row, Col, GridContainer, GridItem } from '@/components/Layout';

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
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>
        <Row justify="space-between">
          <Col>
            <p>Proof of Achievementss</p>
            <p>In your Soul</p>
            <p>Collect achievement badges as Soulbound NFTs and build your on-chain reputation</p>
          </Col>
          <Col>Place some nice image here</Col>
        </Row>

        <GridContainer gap={14} justify="space-between">
          <GridItem size={7} direction="column">
            <p>Proof of Achievementss</p>
            <p>In your Soul</p>
            <p>Collect achievement badges as Soulbound NFTs and build your on-chain reputation</p>
          </GridItem>
          <GridItem size={5}>Place some nice image here</GridItem>
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
