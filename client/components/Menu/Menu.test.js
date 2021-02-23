import Menu from './Menu.component'
import renderer from 'react-test-renderer'
import fetch from 'cross-fetch'
import { Provider } from 'react-redux'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from '@apollo/client'
import { act, render } from '@testing-library/react'

describe('Renders menu component', () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: '/graphql', fetch }),
    cache: new InMemoryCache()
  });
  const store = {
    getState: () => ({
      sapient: {
        people: [],
        limit: 20
      },
    }),
    subscribe: jest.fn(),
    dispatch: jest.fn()
  }
  it("should render component", async() => {
    const el = document.createElement('div')
    await act(() => {
      render(
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Menu />
          </ApolloProvider>
        </Provider>
      )
  
    })
    expect(el.innerHTML).toBe('')
  })
})
