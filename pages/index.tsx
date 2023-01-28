import Head from 'next/head';
import { Card, Container, Grid, Text } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3Souls</title>
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>
        <Grid.Container gap={6} justify="center">
          <Grid xs={6} direction="column">
            <Card>
              <Text h1>Proof of Achievements</Text>
              <Text h1 css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}>
                in Your Soul
              </Text>
              <Text h3>Collect achievement badges as Soulbound NFTs and build your on-chain reputation</Text>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card>
              <Card.Body>Place some nice image here</Card.Body>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card>
              <Card.Body>Achievements showup goes here</Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
