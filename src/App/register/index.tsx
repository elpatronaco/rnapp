import React, { FormEvent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { Formik } from 'formik'
import { IUserData } from '../../models/common'
import { EyeIcon, EyeOffIcon } from '../../components/icon'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const register = ({ navigation }: { navigation: any }) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false)
  const initialValues: IUserData = {
    email: '',
    password: '',
    name: '',
    birthdate: new Date()
  }
  const submit = (values: IUserData) => console.log(values)

  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => (
        <View style={styles.form}>
          <Text style={styles.title}>Registrar</Text>
          <TextInput
            placeholder="Nombre"
            value={values.email}
            style={[styles.input, styles.element]}
            onChangeText={handleChange('email')}
          />
          <TextInput
            placeholder="Correo electrónico"
            value={values.email}
            style={[styles.input, styles.element]}
            onChangeText={handleChange('email')}
          />
          <TextInput
            placeholder="Contraseña"
            value={values.password}
            style={[styles.input, styles.element]}
            secureTextEntry={passwordVisible}
            onChangeText={handleChange('password')}
          />
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
