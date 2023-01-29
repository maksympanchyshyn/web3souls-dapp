import styled from 'styled-components';

export type FlexProps = {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type GridContainerProps = FlexProps & {
  gap?: number;
};

export type GridItemProps = FlexProps & {
  size?: number;
};

const getGridItemWidth = (size: number | undefined) => {
  if (!size || size < 1) {
    return 'auto';
  } else if (size >= 12) {
    return '100%';
  } else {
    return `${(100 / 12) * size}%`;
  }
};

export const FlexDiv = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props: FlexProps) => props.justify || 'flex-start'};
  align-items: ${(props: FlexProps) => props.alignItems || 'stretch'};
  align-content: ${(props: FlexProps) => props.alignContent || 'stretch'};
  flex-direction: ${(props: FlexProps) => props.direction || 'row'};
  flex-wrap: ${(props: FlexProps) => props.wrap || 'wrap'};
`;

export const GlobalContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  & > * {
    margin: 12px 0;
  }
`;

export const Col = styled(FlexDiv)<FlexProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const Row = styled(FlexDiv)<FlexProps>`
  flex-direction: row;
  border: 1px solid green;
`;

export const GridContainer = styled(FlexDiv)<GridContainerProps>`
  width: 100%;
  & > * {
    padding: ${(props: GridContainerProps) => `${props.gap}px` || '0'};
  }
`;

export const GridItem = styled(FlexDiv)<GridItemProps>`
  width: ${(props: GridItemProps) => getGridItemWidth(props.size)};
`;
