'use client';

import React from 'react';
import Image from 'next/image';
import { IvyBorder } from './decorative/IvyBorder';
import { FloralPattern } from './decorative/FloralPattern';
import { Member } from '../data/members';

interface MemberCardProps {
    member: Member;
    index: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
    // Stagger animation delay
    const animationDelay = `${index * 0.1}s`;

    return (
        <div
            className="group relative animate-fade-in"
            style={{ animationDelay }}
        >
            <IvyBorder className="bg-gradient-to-br from-cream to-warmBeige-50 shadow-lg hover:shadow-xl p-6 rounded-2xl transition-all hover:-translate-y-2 duration-300">
                <div className="relative">
                    {/* Corner decorative elements */}
                    <div className="-top-2 -left-2 absolute opacity-40 group-hover:opacity-60 transition-opacity">
                        <FloralPattern pattern="rose" size="sm" />
                    </div>
                    <div className="-top-2 -right-2 absolute opacity-40 group-hover:opacity-60 transition-opacity">
                        <FloralPattern pattern="vine" size="sm" />
                    </div>

                    {/* Member Image with decorative frame */}
                    <div className="relative mb-6">
                        <div className="relative mx-auto w-48 h-48">
                            {/* Decorative border around image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-dustyRose-200 p-1 rounded-full">
                                <div className="bg-gradient-to-br from-lavender-100 to-warmBeige-100 p-2 rounded-full w-full h-full">                  <div className="relative shadow-lg border-4 border-white rounded-full w-full h-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={`${member.name} - ${member.role}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 200px, (max-width: 1200px) 250px, 300px"
                                        priority={index < 3}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyU621qVBVl7KzSh5CgYLOOdlEasuVQDHJp9YOLEAIRAo/O81sA2LGN8EAOA=="
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=300&background=B8C5B8&color=fff&font-size=0.4`;
                                        }}
                                    />
                                </div>
                                </div>
                            </div>

                            {/* Ivy decoration around the image */}
                            <div className="absolute -inset-4 opacity-50 group-hover:opacity-70 transition-opacity">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 220 220"
                                    className="animate-float"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                >
                                    <path
                                        d="M110,20 Q150,40 180,80 Q200,110 180,140 Q150,180 110,200 Q70,180 40,140 Q20,110 40,80 Q70,40 110,20"
                                        stroke="#B8C5B8"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    {/* Small leaves around the circle */}
                                    <g className="fill-sage-300">
                                        <ellipse cx="110" cy="25" rx="3" ry="6" transform="rotate(0 110 25)" />
                                        <ellipse cx="175" cy="85" rx="3" ry="6" transform="rotate(60 175 85)" />
                                        <ellipse cx="175" cy="135" rx="3" ry="6" transform="rotate(120 175 135)" />
                                        <ellipse cx="110" cy="195" rx="3" ry="6" transform="rotate(180 110 195)" />
                                        <ellipse cx="45" cy="135" rx="3" ry="6" transform="rotate(240 45 135)" />
                                        <ellipse cx="45" cy="85" rx="3" ry="6" transform="rotate(300 45 85)" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Member Information */}
                    <div className="space-y-3 text-center">
                        <h3 className="font-serif font-semibold text-sage-800 group-hover:text-sage-900 text-xl md:text-2xl transition-colors">
                            {member.name}
                        </h3>

                        {member.role && (
                            <p className="font-sans font-medium text-dustyRose-600 text-sm uppercase tracking-wide">
                                {member.role}
                            </p>
                        )}

                        {member.description && (
                            <p className="px-2 font-sans text-sage-600 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        )}
                    </div>

                    {/* Bottom decorative elements */}
                    <div className="-bottom-2 left-1/2 absolute opacity-30 group-hover:opacity-50 transition-opacity -translate-x-1/2 transform">
                        <FloralPattern pattern="bouquet" size="sm" />
                    </div>
                </div>
            </IvyBorder>
        </div>
    );
};
