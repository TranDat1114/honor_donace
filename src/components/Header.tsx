import React from 'react';
import { FrenchOrnament } from './decorative/FrenchOrnament';
import { FloralPattern } from './decorative/FloralPattern';
import { IvyBorder } from './decorative/IvyBorder';
import { projectInfo } from '../data/members';

export const Header: React.FC = () => {
    return (
        <header className="relative bg-gradient-to-b from-sage-50 to-cream shadow-lg overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="top-4 left-4 absolute">
                    <FloralPattern pattern="vine" size="lg" />
                </div>
                <div className="top-4 right-4 absolute">
                    <FloralPattern pattern="rose" size="lg" />
                </div>
                <div className="bottom-4 left-1/4 absolute">
                    <FloralPattern pattern="bouquet" size="md" />
                </div>
                <div className="right-1/4 bottom-4 absolute">
                    <FloralPattern pattern="vine" size="md" />
                </div>
            </div>

            <IvyBorder variant="bottom" className="z-10 relative">
                <div className="mx-auto px-4 py-8 md:py-12 container">
                    <div className="space-y-6 text-center">
                        {/* Logo/Brand Section */}
                        <div className="space-y-4">
                            <div className="flex justify-center">
                                <FrenchOrnament size="lg" variant="corner" className="opacity-80" />
                            </div>

                            <h1 className="font-serif font-bold text-sage-800 text-4xl md:text-5xl lg:text-6xl tracking-wide">
                                {projectInfo.name}
                            </h1>

                            <div className="flex justify-center">
                                <FrenchOrnament size="md" variant="divider" />
                            </div>

                            <p className="font-sans font-medium text-dustyRose-700 text-lg md:text-xl lg:text-2xl">
                                {projectInfo.description}
                            </p>

                            <p className="mx-auto max-w-2xl font-sans text-sage-600 text-base md:text-lg leading-relaxed">
                                {projectInfo.tagline}
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex justify-center space-x-8 pt-4">
                            <div className="opacity-60 hover:opacity-80 transition-opacity">
                                <FloralPattern pattern="rose" size="sm" />
                            </div>
                            <div className="opacity-60 hover:opacity-80 transition-opacity">
                                <FloralPattern pattern="vine" size="sm" />
                            </div>
                            <div className="opacity-60 hover:opacity-80 transition-opacity">
                                <FloralPattern pattern="bouquet" size="sm" />
                            </div>
                        </div>

                        {/* Navigation hint */}
                        <div className="pt-6">
                            <div className="inline-flex items-center space-x-2 text-sage-500 text-sm">
                                <span>Cuộn xuống để khám phá</span>
                                <svg
                                    className="w-4 h-4 animate-bounce"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </IvyBorder>
        </header>
    );
};
