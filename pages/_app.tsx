import type { AppProps } from 'next/app';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import { store } from 'redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootContainer>
        <Component {...pageProps} />
      </RootContainer>
    </Provider>
  );
}

const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #085ff3;
`;

export default MyApp;
