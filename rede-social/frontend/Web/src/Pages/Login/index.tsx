import { AuthForm } from "../../Components/AuthForm";
import api from "../../services/api"

export function Login() {
    async function handleLogin(user: string, password: string) {
        const data = await api.post("/security/login", {
            user,
            password
        })
        console.log(data)
    }

    return (
        <AuthForm
            formTitle="Faça Login e começe a usar!"
            submitFormButtomText="Entrar"
            submitFormButtomAction={handleLogin}
            linkDescription="Não possui conta? Crie uma agora!"
            routeName="/signup"
        />
    );
}
