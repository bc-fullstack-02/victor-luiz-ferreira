import { Slot } from "@radix-ui/react-slot"
// clsx = definição de classe dinamica(Aula 5 minuto 19:10)
import { clsx } from "clsx";
import {ReactNode} from 'react'

/*Minuto 1:13:50 Aula 4 */
export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
/*Minuto 1:18:40 Aula 4 */
export function Heading({size="md", children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : "h2";
// Explicação classname clsx== minuto 20 até 26 aula 5
// pelo q entendi, se ta criando as opções de tamanho q kd atributo pode receber dentro da função Heading e add oclassname pra receber tb
    return (
        <Comp className={clsx("text-gray-100 font-sans font-bold", 
        {
            "text-lg": size === "sm",
            "text-xl": size === "md",
            "text-2xl": size === "lg"  
        },
            className
        )}
        >
            {children}</Comp>
    );
} 