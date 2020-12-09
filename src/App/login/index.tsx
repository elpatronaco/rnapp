import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Formik } from 'formik'
import { ILoginData } from '../../models/common'
import * as Yup from 'yup'
import { loginRequest, testConnection } from '../../services'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

const login = ({ navigation }: { navigation: any }) => {
  const initialValues: ILoginData = { email: '', password: '' }

  const SigninSchema = React.useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().email('Esto no es un email').required('Este campo es requerido'),
        password: Yup.string()
          .required('Este campo es requerido')
          .uppercase('La contraseña requiere una mayúscula')
          .min(8, 'La contraseña es de mínimo 8 caracteres')
      }),
    [Yup]
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SigninSchema}
      onSubmit={(values: ILoginData) => {
        console.log(values)
        loginRequest(values)
      }}
    >
      {({ handleChange, handleSubmit, values, touched, errors, isValid }) => (
        <View style={styles.form}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput
            placeholder="Correo electrónico"
            value={values.email}
            style={[styles.input, styles.element]}
            onChangeText={handleChange('email')}
          />
          <HelperText type="error" visible={errors.email !== undefined}>
            {errors.email}
          </HelperText>
          <TextInput
            placeholder="Contraseña"
            value={values.password}
            secureTextEntry
            style={[styles.input, styles.element]}
            onChangeText={handleChange('password')}
          />
          <HelperText type="error" visible={errors.password !== undefined}>
            {errors.password}
          </HelperText>
          <Button
            style={[styles.element, styles.buttons, styles.submitbutton]}
            disabled={!isValid}
            color="black"
            onPress={() => handleSubmit()}
          >
            Enviar
          </Button>
          <Button
            style={[styles.element, styles.buttons, styles.registerButton]}
            mode="outlined"
            color="black"
            onPress={() => navigation.navigate('Register')}
          >
            Registrar
          </Button>
          <Button
            style={[styles.element, styles.buttons, styles.registerButton]}
            mode="outlined"
            color="black"
            onPress={() => {
              testConnection()
            }}
          >
            Testiar api
          </Button>
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
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  buttons: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitbutton: {
    backgroundColor: 'red'
  },
  registerButton: {},
  buttonText: {
    marginHorizontal: 8
  }
})

export default login
