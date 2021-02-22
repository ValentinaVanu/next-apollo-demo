import {
  initialState,
  sapientReducer
} from './sapient.reducer'
import * as action from './sapient.action'

// This is just another technique I use for testing

describe("Testing sapient reducer", () => {
  it("should handle SET_PEOPLELIST", () => {
    const expected = {
      "limit": 20,
      "people": [{
        "firstName": "J",
        "secondName": "S"
      }, {
        "firstName": "D",
        "secondName": "B"
      }]
    }
    const peopleAction = action.setPeopleListAction({
      people: [{
          firstName: 'J',
          secondName: "S"
        },
        {
          firstName: 'D',
          secondName: "B"
        },
      ]
    })

    const result = sapientReducer(initialState, peopleAction)

    expect(result).toEqual(expected)
  })

  it("should handle SET_ROW_LIMIT", () => {
    const limit = 20
    const expected = {
      limit,
      people: []
    }
    const result = sapientReducer(initialState, action.setRowLimitAction(limit))

    expect(result).toEqual(expected)
  })
})
