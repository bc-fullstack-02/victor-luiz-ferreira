import { Link } from "react-router-dom"
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { TextInput } from "../Text_Input";
import { Button } from "../../Components/Button";

import Logo from "../../Assets/Logo.svg";
import { User, Lock } from "phosphor-react"
import { FormEvent } from "react";

interface AuthFormProps {
    formTitle: string,
    submitFormButtomText: string, 
    submitFormButtomAction: (user: string, password: string) => void
    linkDescription: string,
    routeName: string
}


export function AuthForm({
    formTitle, 
    submitFormButtomText, 
    submitFormButtomAction,
    linkDescription,
    routeName,
    } : AuthFormProps) {

    function handleSubmit(event: FormEvent){
        event.preventDefault()
        const form = event.target as HTMLFormElement

        submitFormButtomAction(
            form.elements.user.value,
             form.elements.password.value
        )
    }

    return (
        <div className="text-cyan-50 flex flex-col items-center mt-20">
            <header className="flex flex-col items-center">

                <img src={Logo} alt="Logo-Papagaio/Parrot" />

                <Heading size="lg" className="mt-2">
                    Sysmap Parrot
                </Heading>
                <Text className="mt-1 opacity-50">{formTitle}</Text>

            </header>

            <form 
                onSubmit={(e)=>handleSubmit(e)} 
                className="mt-10 flex-col gap-4 items-stretch w-full max-w-sm"
            >
                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <User/>
                        </TextInput.Icon>
                        <TextInput.Input 
                            id="user"
                            type="text" 
                            placeholder="Digite seu Login"/>
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock/>
                        </TextInput.Icon>
                        <TextInput.Input 
                            id="password" 
                            type="password" 
                            placeholder="Digite sua Senha"/>
                    </TextInput.Root>
                </label>

                <Button type="submit" className="mt-4">
                    {submitFormButtomText}
                </Button>
            </form>


        
            <footer className="flex flex-col items-center gap-4 mt-8 ">
                <Text asChild size="sm">
                    <Link
                        to={routeName}
                        className="text-gray-400 underline hover:text-gray-200"
                    >
                        {linkDescription}
                    </Link>
                </Text>
            </footer>
        </div>
    );
}