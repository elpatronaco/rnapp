import { ILoginData, IUserData } from '../models/common'

const url = 'https://192.168.1.58:4500'

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

const testConnection = async () => {
  await fetch(url + '/', {
    method: 'GET'
  })
    .then(response => {
      console.log(response)
      console.log('connectat')
    })
    .catch(reason => {
      console.error(reason)
    })
}

export { loginRequest, testConnection }
