import { createReducer } from 'typesafe-actions'
import { IUserData } from '../../models/common'
import authActions from './actions'

interface IAuthState extends IUserData {
  authorized: boolean
  loading: boolean
}

const initialState: IAuthState = {
  loading: false,
  authorized: false,
  email: '',
  password: '',
  name: '',
  birthdate: new Date()
}

export default createReducer(initialState)
  .handleAction(
    authActions.loginAction.request,
    (state: IAuthState, action: typeof authActions.loginAction.request) => ({
      ...state,
      loading: true
    })
  )
  .handleAction(authActions.loginAction.success, (state: IAuthState, action: typeof ))
