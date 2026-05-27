import { useEffect, useRef, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    direction?: 'up' | 'left' | 'right';
    delay?: 0 | 100 | 200 | 300;
    className?: string;
    threshold?: number;
}

export function FadeIn({ children, direction = 'up', delay = 0, className = '', threshold = 0.15 }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const dirClass = direction === 'left' ? 'from-left' : direction === 'right' ? 'from-right' : '';
        const delayClass = delay > 0 ? `delay-${delay}` : '';

        el.classList.add('fade-in-element');
        if (dirClass) el.classList.add(dirClass);
        if (delayClass) el.classList.add(delayClass);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.disconnect();
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [direction, delay, threshold]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
