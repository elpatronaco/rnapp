import { createAsyncAction } from 'typesafe-actions'
import { ILoginData, IUserData } from '../models/common'

const login = createAsyncAction(
  '[General] Login Request',
  '[General] Login Success',
  '[General] Login Fail'
)<ILoginData, IUserData, undefined>()
