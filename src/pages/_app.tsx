import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            background: #0a000b;
          }
        `}</style>
      </Layout>
    </ApolloProvider>
  );
}
