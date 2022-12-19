// Criar Button Aula 5 minuto 1:38:00 até 1:52:00

import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean;
    className: string;
}

export function Button({children, asChild, className,...props}: ButtonProps){
    const Comp = asChild ? Slot : "button";

    return (
        <Comp className={clsx(
            "py-3 px-4 bg-cyan-600 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-400 focus:ring-2 ring-white",
            className)}
            {...props}> {children} </Comp>
    );
}