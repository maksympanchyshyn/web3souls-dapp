import Head from 'next/head';
import { Soul } from '@prisma/client';

import { Col, Container, Spacer } from '@/components/Layout';
import { Card, CardBody } from '@/components/Card';
import { SoulPreview } from '@/components/SoulPreview';
import { useEffect, useState } from 'react';

export default function ExploreSouls() {
  const [souls, setSouls] = useState<Soul[]>([]);

  const getSouls = async () => {
    const res = await fetch('/api/souls');
    setSouls(await res.json());
  };

  useEffect(() => {
    getSouls();
  }, []);

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
