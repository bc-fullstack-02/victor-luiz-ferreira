// Aula 7 min 18,, npm install jwt-decode
//  biblioteca pequena que é só pra pegar o token e pegaroq tiver dentro dele
import jwt_decode from 'jwt-decode';

// Importar rota aula 7
import { useNavigate } from 'react-router-dom';

// Explicação das Rotas Aula 6 min 28 até 35:25, npm instal react-router-dom
import { AuthForm } from "../../Components/AuthForm";
import api from "../../Services/api";

interface UserToken {
    profile: string;
    user: string;
};

// Explicação Aula 6 min 24 até 26:20
export function Login() {
    // Aula 7 min 39
    const navegate = useNavigate();

// aula 6 min 1h e 11 até 1h e 16
    async function handleLogin(user:string, password: string) {
        // aula 7 min 22 até 28
        try {
            const { data } = await api.post("/security/login", {
                user,
                password
            });
            const decodeToken = jwt_decode(data.accessToken) as UserToken;
            localStorage.setItem("profile", decodeToken.profile);
            localStorage.setItem("user", decodeToken.user);
            localStorage.setItem("accessToken", data.accessToken);

            return navegate("/home");   
        }
        catch (err) {
            console.log(err);
            alert("Ocorreu um Erro no Login");
        }
    };

    return (
        <AuthForm
            formTitle="Faça seu Login para Entrar!"
            submitFormButtonText="Entrar"
            submitFormButtonAction={handleLogin}
            linkDescription="Não Tem Uma Conta? Crie Uma Agora!"
            routeName="singup"
            />
    );
};