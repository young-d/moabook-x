import type { AppProps } from 'next/app';
import styled from '@emotion/styled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContainer>
      <Component {...pageProps} />
    </RootContainer>
  );
}

const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #085ff3;
`;

export default MyApp;
