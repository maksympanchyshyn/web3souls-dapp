import Head from 'next/head';
import Image from 'next/image';

import { Container, GridContainer, GridItem, Row, Spacer } from '@/components/Layout';
import { Heading } from '@/components/Text';
import { Button } from '@/components/Button';
import { Card, CardBody } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Label, SoulDescription, SoulInfoWrapper, Value } from '@/components/SoulInfo';

export default function SoulPage() {
  const soul = {
    id: 1,
    name: 'Arbitrum Newbie',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, facilis excepturi eos ipsa quas quis saepe doloribus illo odit nihil possimus. Iusto iure at ipsum eius quae! Libero, possimus id.',
    image: '/badge-placeholder.svg',
    project: 'Arbitrum',
    category: 'General',
    network: 'Arbitrum One',
    holders: 1000,
  };

  return (
    <>
      <Head>
        <title>Web3Souls | Soul Page</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Collect your on-chain soulbound achievements at Web3Souls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Container>
        <Spacer y={18} />
        <GridContainer gap={14} justify="space-between">
          <GridItem size={7} direction="column">
            <Row>
              <Heading>{soul.name}</Heading>
              <SoulDescription>{soul.description}</SoulDescription>
            </Row>
            <Spacer y={20} />
            <Divider />
            <Spacer y={20} />
            <Row>
              <SoulInfoWrapper>
                <Label>Category</Label>
                <Value>{soul.category}</Value>
              </SoulInfoWrapper>
              <SoulInfoWrapper>
                <Label>Network</Label>
                <Value>{soul.network}</Value>
              </SoulInfoWrapper>
            </Row>
            <Spacer y={12} />
            <Row>
              <SoulInfoWrapper>
                <Label>Project</Label>
                <Value>{soul.project}</Value>
              </SoulInfoWrapper>
              <SoulInfoWrapper>
                <Label>Holders</Label>
                <Value>{soul.holders}</Value>
              </SoulInfoWrapper>
            </Row>
          </GridItem>
          <GridItem size={5} direction="column">
            <Card>
              <CardBody>
                <Image src={soul.image} alt="badge-img" width={450} height={450} />
              </CardBody>
            </Card>
            <Spacer y={8} />
            <Button rounded>Check eligibility</Button>
          </GridItem>
        </GridContainer>
        <Spacer y={18} />
        <Card></Card>
      </Container>
    </>
  );
}
