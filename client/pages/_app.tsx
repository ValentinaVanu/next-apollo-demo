import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import store from '../store'

const client = new ApolloClient({ uri: "http://localhost:5000/graphql", cache: new InMemoryCache() })

const style: any = {
  // background: 'rgb(121,121,121)',
  background: 'linear-gradient(170deg, rgba(121,121,121,1) 0%, rgba(232,245,255,1) 58%, rgba(130,130,130,1) 100%)',
}

export default function App({ Component, pageProps }) {
  console.log(client)
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component  {...pageProps} />
        <style jsx global>{`
          body {
            background: #f5f5f5;
          }
        `}</style>
      </ApolloProvider>
    </Provider>

  )
}
