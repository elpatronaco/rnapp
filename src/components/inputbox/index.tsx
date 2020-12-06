import * as React from 'react'
import { Input } from '@ui-kitten/components'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

type props = {
  label?: string
  name: string
} & React.ComponentPropsWithRef<'input'>

const InputBox = React.forwardRef(function InputBox({ label, ...res }: props, ref: React.Ref) {
  const [value, setValue] = React.useState<any>('')

  return (
    <Input placeholder={label} value={value} {...res} onChangeText={(e: string) => setValue(e)} />
  )
})

export default InputBox
