import * as constant from './sapient.constant'

export const initialState = {
  limit: 20,
  people: []
}


export const sapientReducer = ( state = initialState, action) => {
  switch (action.type) {
    case constant.SET_PEOPLE_LIST:
      return {
        ...state,
        people: action.people.people
      }
    case constant.SET_ROW_LIMIT:
      return {
        ...state,
        limit: action.limit
      }
    default:
      return state
  }
}
