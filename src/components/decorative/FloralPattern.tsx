import React from 'react';

interface FloralPatternProps {
    className?: string;
    pattern?: 'rose' | 'vine' | 'bouquet';
    size?: 'sm' | 'md' | 'lg';
}

export const FloralPattern: React.FC<FloralPatternProps> = ({
    className = '',
    pattern = 'rose',
    size = 'md'
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    if (pattern === 'rose') {
        return (
            <svg
                className={`${sizeClasses[size]} ${className}`}
                viewBox="0 0 100 100"
                fill="none"
            >
                {/* Rose petals */}
                <circle cx="50" cy="50" r="25" fill="#E8B4B8" opacity="0.4" />
                <circle cx="45" cy="45" r="18" fill="#E8B4B8" opacity="0.6" />
                <circle cx="50" cy="48" r="12" fill="#E8B4B8" opacity="0.8" />
                <circle cx="52" cy="50" r="8" fill="#E8B4B8" />

                {/* Leaves */}
                <ellipse cx="25" cy="60" rx="8" ry="15" fill="#B8C5B8" opacity="0.7" transform="rotate(-30 25 60)" />
                <ellipse cx="75" cy="40" rx="8" ry="15" fill="#B8C5B8" opacity="0.7" transform="rotate(30 75 40)" />
            </svg>
        );
    }

    if (pattern === 'bouquet') {
        return (
            <svg
                className={`${sizeClasses[size]} ${className}`}
                viewBox="0 0 100 100"
                fill="none"
            >
                {/* Multiple small flowers */}
                <circle cx="30" cy="30" r="8" fill="#E8B4B8" opacity="0.6" />
                <circle cx="50" cy="25" r="6" fill="#D4C5E8" opacity="0.6" />
                <circle cx="70" cy="35" r="7" fill="#E8B4B8" opacity="0.5" />
                <circle cx="40" cy="50" r="5" fill="#D4C5A9" opacity="0.6" />
                <circle cx="60" cy="55" r="6" fill="#D4C5E8" opacity="0.5" />

                {/* Stems */}
                <path d="M30,40 L30,80" stroke="#B8C5B8" strokeWidth="2" />
                <path d="M50,35 L50,80" stroke="#B8C5B8" strokeWidth="2" />
                <path d="M70,45 L70,80" stroke="#B8C5B8" strokeWidth="2" />
            </svg>
        );
    }

    // Default vine pattern
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Vine stem */}
            <path
                d="M10,50 Q30,30 50,50 Q70,70 90,50"
                stroke="#B8C5B8"
                strokeWidth="3"
                fill="none"
            />

            {/* Leaves along vine */}
            <ellipse cx="25" cy="40" rx="5" ry="10" fill="#B8C5B8" opacity="0.7" transform="rotate(15 25 40)" />
            <ellipse cx="45" cy="55" rx="5" ry="10" fill="#B8C5B8" opacity="0.7" transform="rotate(-15 45 55)" />
            <ellipse cx="65" cy="45" rx="5" ry="10" fill="#B8C5B8" opacity="0.7" transform="rotate(30 65 45)" />
            <ellipse cx="80" cy="55" rx="5" ry="10" fill="#B8C5B8" opacity="0.7" transform="rotate(-30 80 55)" />

            {/* Small flowers */}
            <circle cx="35" cy="35" r="3" fill="#E8B4B8" opacity="0.8" />
            <circle cx="75" cy="60" r="3" fill="#D4C5E8" opacity="0.8" />
        </svg>
    );
};
