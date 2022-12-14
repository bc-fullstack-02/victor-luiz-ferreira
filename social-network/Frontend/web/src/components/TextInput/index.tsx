import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";

interface TextInputRootProps {
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-neutral-800 bg-secondary focus-within:ring-2 ring-cyan-300 w-full">
            {props.children}
        </div>
    )
}
interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon(props: TextInputIconProps) {
    return (
        < Slot className='w-6 h-6 text-gray-400' >
            {props.children}
        </Slot >
    )
}


interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}
function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
}


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};