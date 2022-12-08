// Importando components
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { TextInput } from "../../Components/TextInput";
import { Button } from "../../Components/Button";

import Logo from "../../Assets/Logo.svg";
import { User, Lock } from "phosphor-react"


export function Login() {
    return (
        <div className="text-cyan-50 flex flex-col items-center mt-20">
            <header className="flex flex-col items-center">

                <img src={Logo} alt="Logo-Papagaio/Parrot" />

                <Heading size="lg" className="mt-2">Sysmap Parrot</Heading>
                <Text className="mt-1 opacity-50">Faça seu Login para Entrar </Text>

            </header>

            <form className="mt-10 flex-col gap-4 items-stretch w-full max-w-sm">
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

                <Button type="submit" className="mt-4">Entrar</Button>
            </form>

            <footer>
                <h1 className="text-white">Footer</h1>
            </footer>
        </div>
    );
}

