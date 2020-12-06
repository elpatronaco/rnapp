export interface ILoginData {
  email: string
  password: string
}

export interface IUserData extends ILoginData {
  name: string
  birthdate: Date
}
