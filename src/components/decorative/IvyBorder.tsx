import React from 'react';

interface IvyBorderProps {
    className?: string;
    variant?: 'top' | 'bottom' | 'both' | 'around';
    children?: React.ReactNode;
}

export const IvyBorder: React.FC<IvyBorderProps> = ({
    className = '',
    variant = 'around',
    children
}) => {
    return (
        <div className={`relative ${className}`}>
            {/* Top Ivy */}
            {(variant === 'top' || variant === 'both' || variant === 'around') && (
                <div className="-top-4 right-0 left-0 absolute opacity-70 h-8">
                    <svg
                        width="100%"
                        height="32"
                        viewBox="0 0 800 32"
                        className="fill-sage-400"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,16 Q100,8 200,16 T400,16 T600,16 T800,16"
                            stroke="#B8C5B8"
                            strokeWidth="2"
                            fill="none" />
                        {/* Leaves along the vine */}
                        <g className="fill-sage-300">
                            <ellipse cx="50" cy="12" rx="4" ry="8" transform="rotate(15 50 12)" />
                            <ellipse cx="150" cy="20" rx="4" ry="8" transform="rotate(-15 150 20)" />
                            <ellipse cx="250" cy="12" rx="4" ry="8" transform="rotate(30 250 12)" />
                            <ellipse cx="350" cy="20" rx="4" ry="8" transform="rotate(-30 350 20)" />
                            <ellipse cx="450" cy="12" rx="4" ry="8" transform="rotate(15 450 12)" />
                            <ellipse cx="550" cy="20" rx="4" ry="8" transform="rotate(-15 550 20)" />
                            <ellipse cx="650" cy="12" rx="4" ry="8" transform="rotate(30 650 12)" />
                            <ellipse cx="750" cy="20" rx="4" ry="8" transform="rotate(-30 750 20)" />
                        </g>
                    </svg>
                </div>
            )}

            {/* Bottom Ivy */}
            {(variant === 'bottom' || variant === 'both' || variant === 'around') && (
                <div className="right-0 -bottom-4 left-0 absolute opacity-70 h-8">
                    <svg
                        width="100%"
                        height="32"
                        viewBox="0 0 800 32"
                        className="fill-sage-400"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,16 Q100,24 200,16 T400,16 T600,16 T800,16"
                            stroke="#B8C5B8"
                            strokeWidth="2"
                            fill="none" />
                        {/* Leaves along the vine */}
                        <g className="fill-sage-300">
                            <ellipse cx="50" cy="20" rx="4" ry="8" transform="rotate(-15 50 20)" />
                            <ellipse cx="150" cy="12" rx="4" ry="8" transform="rotate(15 150 12)" />
                            <ellipse cx="250" cy="20" rx="4" ry="8" transform="rotate(-30 250 20)" />
                            <ellipse cx="350" cy="12" rx="4" ry="8" transform="rotate(30 350 12)" />
                            <ellipse cx="450" cy="20" rx="4" ry="8" transform="rotate(-15 450 20)" />
                            <ellipse cx="550" cy="12" rx="4" ry="8" transform="rotate(15 550 12)" />
                            <ellipse cx="650" cy="20" rx="4" ry="8" transform="rotate(-30 650 20)" />
                            <ellipse cx="750" cy="12" rx="4" ry="8" transform="rotate(30 750 12)" />
                        </g>
                    </svg>
                </div>
            )}

            {/* Content */}
            {children}
        </div>
    );
};
