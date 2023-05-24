import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AuthProvider, LoadingProvider } from "@/context";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: "https://2dm03nv5m8.execute-api.us-east-1.amazonaws.com/",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LoadingProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </LoadingProvider>
    </ApolloProvider>
  );
}
