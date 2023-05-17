import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { Layout } from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
