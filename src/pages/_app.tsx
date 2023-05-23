import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LoadingProvider } from "@/context";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProvider>
    </ApolloProvider>
  );
}
