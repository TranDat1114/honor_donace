import React from 'react';

interface FrenchOrnamentProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    variant?: 'corner' | 'divider' | 'frame';
}

export const FrenchOrnament: React.FC<FrenchOrnamentProps> = ({
    size = 'md',
    className = '',
    variant = 'divider'
}) => {
    const sizeClasses = {
        sm: 'w-16 h-8',
        md: 'w-24 h-12',
        lg: 'w-32 h-16'
    };

    if (variant === 'corner') {
        return (
            <svg
                className={`${sizeClasses[size]} ${className}`}
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M10,10 Q50,5 90,10 Q95,50 90,90 Q50,95 10,90 Q5,50 10,10"
                    stroke="#D4C5A9"
                    strokeWidth="2"
                    fill="none"
                />
                <circle cx="20" cy="20" r="3" fill="#E8B4B8" opacity="0.6" />
                <circle cx="80" cy="20" r="3" fill="#D4C5E8" opacity="0.6" />
                <circle cx="20" cy="80" r="3" fill="#D4C5E8" opacity="0.6" />
                <circle cx="80" cy="80" r="3" fill="#E8B4B8" opacity="0.6" />
            </svg>
        );
    }

    if (variant === 'frame') {
        return (
            <svg
                className={`${sizeClasses[size]} ${className}`}
                viewBox="0 0 200 100"
                fill="none"
            >
                {/* Ornamental frame */}
                <rect
                    x="10" y="10"
                    width="180" height="80"
                    rx="8"
                    stroke="#D4C5A9"
                    strokeWidth="2"
                    fill="none"
                />
                {/* Corner decorations */}
                <path d="M10,10 L25,10 L25,25 L10,25 Z" fill="#E8B4B8" opacity="0.3" />
                <path d="M175,10 L190,10 L190,25 L175,25 Z" fill="#D4C5E8" opacity="0.3" />
                <path d="M10,75 L25,75 L25,90 L10,90 Z" fill="#D4C5E8" opacity="0.3" />
                <path d="M175,75 L190,75 L190,90 L175,90 Z" fill="#E8B4B8" opacity="0.3" />
            </svg>
        );
    }

    // Default divider variant
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            viewBox="0 0 200 50"
            fill="none"
        >
            {/* Central ornament */}
            <circle cx="100" cy="25" r="8" fill="#D4C5A9" opacity="0.4" />
            <circle cx="100" cy="25" r="4" fill="#E8B4B8" opacity="0.6" />

            {/* Side flourishes */}
            <path
                d="M20,25 Q60,15 90,25 Q60,35 20,25"
                stroke="#B8C5B8"
                strokeWidth="1.5"
                fill="none"
            />
            <path
                d="M110,25 Q140,15 180,25 Q140,35 110,25"
                stroke="#B8C5B8"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Small decorative dots */}
            <circle cx="40" cy="20" r="2" fill="#D4C5E8" opacity="0.5" />
            <circle cx="160" cy="30" r="2" fill="#D4C5E8" opacity="0.5" />
            <circle cx="60" cy="30" r="1.5" fill="#E8B4B8" opacity="0.5" />
            <circle cx="140" cy="20" r="1.5" fill="#E8B4B8" opacity="0.5" />
        </svg>
    );
};
