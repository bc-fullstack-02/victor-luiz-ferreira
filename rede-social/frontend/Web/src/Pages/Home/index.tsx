// Aula 7 Min 30 & min 50, cricação da home
import Logo_Menu from "../../Assets/Logo_Menu.svg";
import { Text } from "../../Components/Text";
import { Menu } from "../../Components/Menu";

export function Home() {
    return( 
        <div className="w-screen h-screen flex">
            {/* Esplicacção tailwind, aula 7 min 51 */}
            <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
                <div className="flex items-center ml-4">
                    <img src={Logo_Menu} alt="Logo Home"/>
                    <Text className="font-extrabold ml-4">Parrot</Text>
                </div>
                {/* Componente Menu */}
                <Menu/>
            </div>
            <div className="basis-5/6"></div>
        </div>
        );
}