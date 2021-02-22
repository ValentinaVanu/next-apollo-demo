import * as constant from './sapient.constant'

export const setPeopleListAction = people => ({
  type: constant.SET_PEOPLE_LIST,
  people
})

export const setRowLimitAction = limit => ({
  type: constant.SET_ROW_LIMIT,
  limit
})


