import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none';

    const variants = {
        primary: 'bg-[#7B2FFF] hover:bg-[#9B4FFF] text-white rounded-full',
        ghost: 'text-white/70 hover:text-white rounded-lg',
        outline: 'border border-white/15 hover:border-white/30 text-white rounded-lg',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm gap-1.5',
        md: 'px-6 py-2.5 text-sm gap-2',
        lg: 'px-8 py-3.5 text-base gap-2',
    };

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}
