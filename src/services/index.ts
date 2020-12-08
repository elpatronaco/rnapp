import { IUser } from '../../backend/schema/users'
import { ILoginData, IUserData } from '../models/common'

const url = 'http://192.168.1.58:4000'

const loginRequest = async (values: ILoginData): Promise<IUserData | null> => {
  await fetch(`${url}/user/login/${JSON.stringify(values)}`, {
    method: 'POST'
  })
    .then(response => {
      response.json()
    })
    .then(data => {
      return data
    })
    .catch(reason => {
      console.error(reason)
    })
  return null
}

export { loginRequest }
