import * as constant from './sapient.constant'
import * as action from './sapient.action'

const people = []
const limit = 20

describe("testing all sapient actions", () => {
  it("should create an action to set people list", () => {
    expect(action.setPeopleListAction(people)).toEqual({
      type: constant.SET_PEOPLE_LIST,
      people
    })
  })
  it("should create an action to set row limit", () => {
    expect(action.setRowLimitAction(limit)).toEqual({
      type: constant.SET_ROW_LIMIT,
      limit
    })
  })
})
