import Head from 'next/head';
import Image from 'next/image';

import { Container, GridContainer, GridItem, Row, Spacer } from '@/components/Layout';
import { Heading, Paragraph } from '@/components/Text';
import { Button } from '@/components/Button';

export default function ExploreSouls() {
  return (
    <>
      <Head>
        <title>Web3Souls | Explore</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>Explore Souls Page</Container>
    </>
  );
}
