import React from 'react'
import { ImageStyle } from 'react-native'
import { Icon as UIKIcon, IconElement } from '@ui-kitten/components'

export const EyeIcon = (style: ImageStyle): IconElement => <UIKIcon {...style} name="eye" />

export const EyeOffIcon = (style: ImageStyle): IconElement => <UIKIcon {...style} name="eye-off" />

export const PersonIcon = (style: ImageStyle): IconElement => <UIKIcon {...style} name="person" />

const Icon = (style: ImageStyle, name: string): IconElement => <UIKIcon {...style} name={name} />

export default Icon
