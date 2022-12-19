// Adicionar icones, aula 7 min 1h e 14
import { House, User, UsersThree } from "phosphor-react";

import { MenuItem } from "../Menu_Item";
// Criar componente Menu, aula 7 min 1H
export function Menu(){
    return(
        <ul>
            <MenuItem menuTitle="Pagina Inicial"> <House size={48} weight="fill" /> </MenuItem>
            <MenuItem menuTitle="Perfil"> <User size={48} weight="fill" /> </MenuItem>
            <MenuItem menuTitle="Amigos"> <UsersThree size={48} weight="fill" /> </MenuItem>
        </ul>
    );
};