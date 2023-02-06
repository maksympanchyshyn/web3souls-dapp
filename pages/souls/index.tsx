import Head from 'next/head';

import { Col, Container, Spacer } from '@/components/Layout';
import { Card, CardBody } from '@/components/Card';
import { SoulPreview } from '@/components/SoulPreview';

export default function ExploreSouls() {
  const souls = [
    {
      id: 1,
      name: 'Arbitrum Newbie',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis excepturi eos ipsa quas quis saepe doloribus illo odit nihil possimus. Iusto iure at ipsum eius quae! Libero, possimus id.',
      eligibilyDescription: 'Created at least 1 transaction on Arbitrum One',
      image: '/badge-placeholder.svg',
      icon: '/badge-icon-example.svg',
      project: 'Arbitrum',
      category: 'General',
      network: 'Arbitrum One',
      holders: 1000,
    },
    {
      id: 2,
      name: 'Arbitrum Common User',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis excepturi eos ipsa quas quis saepe doloribus illo odit nihil possimus. Iusto iure at ipsum eius quae! Libero, possimus id.',
      eligibilyDescription: 'Created 5+ transactions on Arbitrum One',
      image: '/badge-placeholder.svg',
      icon: '/badge-icon-example.svg',
      project: 'Arbitrum',
      category: 'General',
      network: 'Arbitrum One',
      holders: 1000,
    },
    {
      id: 3,
      name: 'Arbitrum Uncommon User',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis excepturi eos ipsa quas quis saepe doloribus illo odit nihil possimus. Iusto iure at ipsum eius quae! Libero, possimus id.',
      eligibilyDescription: 'Created 20+ transactions on Arbitrum One',
      image: '/badge-placeholder.svg',
      icon: '/badge-icon-example.svg',
      project: 'Arbitrum',
      category: 'General',
      network: 'Arbitrum One',
      holders: 1000,
    },
    {
      id: 4,
      name: 'Arbitrum Rare User',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis excepturi eos ipsa quas quis saepe doloribus illo odit nihil possimus. Iusto iure at ipsum eius quae! Libero, possimus id.',
      eligibilyDescription: 'Created 50+ transactions on Arbitrum One',
      image: '/badge-placeholder.svg',
      icon: '/badge-icon-example.svg',
      project: 'Arbitrum',
      category: 'General',
      network: 'Arbitrum One',
      holders: 1000,
    },
  ];

  return (
    <>
      <Head>
        <title>Web3Souls | Explore</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>
        <Spacer y={20} />
        <Card>
          <CardBody>
            <Col>
              {souls.map((soul) => (
                <SoulPreview key={soul.id} soul={soul} />
              ))}
            </Col>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
