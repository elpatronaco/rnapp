import React, { FormEvent } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from '@ui-kitten/components'
import { Form, Formik, Field } from 'formik'
import { ILoginData } from '../../models/common'

const login = ({ navigation }: { navigation: any }) => {
  const initialValues: ILoginData = { email: '', password: '' }
  const submit = (values: ILoginData) => console.log(values)

  return (
    <Formik initialValues={initialValues} onSubmit={(values: any) => console.log(values)}>
      {({ handleChange, handleSubmit, values, touched, errors, isSubmitting }) => (
        <View style={styles.form}>
          <Text style={styles.title}>Iniciar Sesión</Text>
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
            onChangeText={handleChange('password')}
          />
          <Button style={[styles.submitbutton, styles.element]} onPress={() => handleSubmit()}>
            Enviar
          </Button>
          <Button
            style={[styles.registerButton, styles.element]}
            appearance="ghost"
            onPress={() => navigation.navigate('Register')}
          >
            Registrar
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
    marginTop: 10
  },
  submitbutton: {
    backgroundColor: 'red',
    fontSize: 15
  },
  registerButton: {},
  buttonText: {
    marginHorizontal: 8
  }
})

export default login