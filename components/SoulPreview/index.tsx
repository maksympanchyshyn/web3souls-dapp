import Image from 'next/image';
import { Heading, Paragraph } from '@/components/Text';

import { IconWrapper, Wrapper } from './styled';
import { Soul } from '@prisma/client';

export type SoulPreviewProps = { soul: Soul };

export const SoulPreview = ({ soul }: SoulPreviewProps) => {
  return (
    <Wrapper href={`/souls/${soul.id}`}>
      <IconWrapper>
        <Image alt={`${soul.name} icon`} height={100} width={100} src={soul.icon} />
      </IconWrapper>
      <div>
        <Heading size={18}>{soul.name}</Heading>
        <Paragraph size={12}>{soul.eligibilityDescription}</Paragraph>
      </div>
    </Wrapper>
  );
};
