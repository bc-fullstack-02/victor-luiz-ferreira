import {  Lock, User } from 'phosphor-react-native'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Text } from 'react-native'

import { Heading } from '../Heading'
import { Input } from '../Input'
import { Spacer } from '../Spacer'
import { Button } from '../Button'

import logo from '../../../assets/parrot.png'

import { styles } from './styles'

import { THEME } from '../../theme'

export interface Auth {
    user: string;
    name?: string;
    password: string;
}

interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (auth: Auth) => void;
    linkDescription: string;
    routeName: string;
    showNameInput?: boolean;
}

export function AuthForm({ formTitle, submitFormButtonText, submitFormButtonAction, linkDescription }: AuthFormProps) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return (
        <KeyboardAvoidingView 
        style={styles.container} 
        contentContainerStyle={styles.containerPosition} 
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
            <Image source={logo} style={logo} resizeMethod="scale"/>
            <Heading title='Sysmap Parrot' 
                    subtitle={formTitle} />
            <Input.Root>
            <Input.Icon>
            <User color={THEME.COLORS.INPUT}/>
            </Input.Icon>
            <Input.Input
                value={user}
                onChangeText={setUser}
                placeholder='Digite seu usuário'
                placeholderTextColor={THEME.COLORS.INPUT}
                autoCapitalize='none'
                autoCorrect
            />   
            </Input.Root>
            <Spacer/>
            <Input.Root>
            <Input.Icon>
            <Lock color={THEME.COLORS.INPUT}/>
            </Input.Icon>
            <Input.Input
                value={password}
                onChangeText={setPassword}
                placeholder='Digite sua senha' 
                placeholderTextColor={THEME.COLORS.INPUT}
                autoCapitalize='none'
                autoCorrect
                secureTextEntry
            />            
            </Input.Root>
            <Spacer />
            <Button onPress={() => submitFormButtonAction({ user, password })} title={submitFormButtonText} />
            <Spacer />
            <Text style={styles.link}>{linkDescription}</Text>
        </KeyboardAvoidingView>
    )
}