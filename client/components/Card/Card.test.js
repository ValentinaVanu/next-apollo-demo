import { CardCollection } from '.'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

describe('Renders card collection component', () => {
  const store = {
    getState: () => ({
      sapient : {
        people: [],
        limit: 20,
      },
    }),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  }
  it("should render the component", () => {
    const { toJSON } = renderer.create(<Provider store={store}><CardCollection /></Provider>)

    expect(toJSON()).toMatchSnapshot()
  })
})
