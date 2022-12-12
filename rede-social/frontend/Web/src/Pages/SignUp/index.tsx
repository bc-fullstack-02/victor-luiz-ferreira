import { AuthForm } from "../../Components/AuthForm";
import api from "../../services/api";

export function SignUp() {
    async function handleRegister(user: string, password: string) {
        
    }

    return (
        <AuthForm
            formTitle="Faça o cadastro e começe a usar!"
            submitFormButtomText="Cadastrar"
            submitFormButtomAction={handleRegister}
            linkDescription="Já possui conta? Entre agora!"
            routeName="/"
        />
    );
}
