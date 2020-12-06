import React, { FormEvent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button, Icon, Datepicker } from '@ui-kitten/components'
import { Formik } from 'formik'
import { IUserData } from '../../models/common'
import { EyeIcon, EyeOffIcon } from '../../components/icon'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const register = ({ navigation }: { navigation: any }) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false)
  const initialValues: IUserData = { email: '', password: '', name: '', birthdate: new Date() }
  const submit = (values: IUserData) => console.log(values)

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={passwordVisible => setPasswordVisible(!passwordVisible)}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => (
        <View style={styles.form}>
          <Text style={styles.title}>Registrar</Text>
          <Input
            placeholder="Nombre"
            value={values.email}
            style={[styles.input, styles.element]}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder="Correo electrónico"
            value={values.email}
            style={[styles.input, styles.element]}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder="Contraseña"
            value={values.password}
            style={[styles.input, styles.element]}
            secureTextEntry={passwordVisible}
            onChangeText={handleChange('password')}
          />
          <Datepicker date={values.birthdate} />
          <Button style={[styles.submitbutton, styles.element]}>Enviar</Button>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10
  },
  element: {
    marginTop: 5,
    width: '100%'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 10
  },
  submitbutton: {
    backgroundColor: 'red',
    borderColor: 'red',
    shadowColor: 'gray',
    fontSize: 15
  },
  registerButton: {},
  buttonText: {
    marginHorizontal: 8
  }
})

export default register
