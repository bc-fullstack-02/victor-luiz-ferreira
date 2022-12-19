// Criação do Menu Item, aula 7 min 1h e 4
import { ReactNode } from "react";
import { Text } from "../Text";
import { Slot } from "@radix-ui/react-slot";

// mudo de menuIcon pra children SLA PQ
interface MenuItemProps {
    menuTitle: string;
    children?: ReactNode;
}

export function MenuItem(props: MenuItemProps){
    return ( 
        props.children,
        <li className="mt-5">
            <div className="flex items-center px-4 rounded-full hover:bg-sky-400 pl-2">
                {/* ele da um erro de não aceitar o children */}
                <Slot className="text-slate-50"> {props.children} </Slot>
                <Text className="font-extrabold ml-4"> {props.menuTitle} </Text>
            </div>
        </li>
    );
};