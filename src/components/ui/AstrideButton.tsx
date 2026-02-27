import React from 'react';
import { Button } from '@heroui/react';
import type { ButtonProps } from '@heroui/react';

export interface AstrideButtonProps extends ButtonProps {
    /**
     * Defines the neon glow color on hover (Magenta or Cyan).
     * Gold string can be added if needed, but primary is Gold.
     */
    glowColor?: 'magenta' | 'cyan';
}

export const AstrideButton: React.FC<AstrideButtonProps> = ({
    glowColor = 'magenta',
    children,
    className = '',
    ...props
}) => {
    // Glow logic using the defined tailwind colors / custom RGB values
    const glowClass = glowColor === 'magenta'
        ? 'hover:shadow-[0_0_20px_rgba(255,0,255,0.7)] hover:border-astrideMagenta'
        : 'hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] hover:border-astrideCyan';

    return (
        <Button
            color="primary" // Gold by default based on HeroUI Theme Config
            radius="none" // To give it a more rock/grunge edgy feel
            className={`font-bold transition-all duration-300 border-2 border-transparent uppercase tracking-wider ${glowClass} ${className}`}
            {...props}
        >
            {children}
        </Button>
    );
};
