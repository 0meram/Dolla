import React from 'react'
import {
Container,
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text,
BackButton
} from './SihgnInElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel>Password</FormLabel>
                        <FormInput type='password' required></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                        <BackButton to='/'>Get back home</BackButton>
                        </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn
