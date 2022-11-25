import {CREATE_USER, READ_USER, UPDATE_USER, DELETE_USER} from './action-type'

export const createUserAction = (data) => {
  return {
    type: CREATE_USER,
    payload: data
  }
}

export const readUserAction = () => {
  return {
    type: READ_USER
  }
}

export const updateUserAction = (data) => {
  return {
    type: UPDATE_USER,
    payload: data
  }
}

export const deleteUserAction = (id) => {
  return {
    type: DELETE_USER,
    payload: id
  }
}