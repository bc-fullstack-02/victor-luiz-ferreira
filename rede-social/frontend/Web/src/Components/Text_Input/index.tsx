// Contrução do TextInput e ja colocando o input com icones, aula 5 minuto 56 até 1:37:34*/}

import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

// Interface e função RootProps
interface TextInputRootProps {
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps){
    return <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300 w-full">{props.children}</div>
}; 

// Interface e função InputProps
interface TextInputInputProps extends InputHTMLAttributes <HTMLInputElement> {
    placehouder?: string
}
function TextInputInput(props: TextInputInputProps){
    return(
        <
            input className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            {...props}
        />
    );
};

// Interface e função IconProps
interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon(props: TextInputIconProps){
    return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
};

// Exportar a constante TextInput e dps só chamar a função q vc quer
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
};