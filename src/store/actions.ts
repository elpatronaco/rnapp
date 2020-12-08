import { createAsyncAction } from 'typesafe-actions'
import { ILoginData, IUserData } from '../models/common'

const login = createAsyncAction(
  '[Auth] Login Request',
  '[Auth] Login Success',
  '[Auth] Login Fail'
)<ILoginData, IUserData, undefined>()

const register = createAsyncAction(
  '[Auth] Register Request',
  '[Auth] Register Success',
  '[Auth] Register Fail'
)<IUserData, IUserData, undefined>()

export { login }
