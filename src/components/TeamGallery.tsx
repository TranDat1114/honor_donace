import React from 'react';
import { MemberCard } from './MemberCard';
import { FrenchOrnament } from './decorative/FrenchOrnament';
import { FloralPattern } from './decorative/FloralPattern';
import { teamMembers } from '../data/members';

export const TeamGallery: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-b from-lavender-50 via-cream to-dustyRose-50 px-4 py-20">
            {/* Background decorative elements */}
            <div className="top-0 left-0 absolute opacity-5 w-full h-full pointer-events-none">
                <div className="top-10 left-10 absolute">
                    <FloralPattern pattern="vine" size="lg" />
                </div>
                <div className="top-20 right-20 absolute">
                    <FloralPattern pattern="bouquet" size="lg" />
                </div>
                <div className="bottom-20 left-20 absolute">
                    <FloralPattern pattern="rose" size="lg" />
                </div>
                <div className="right-10 bottom-10 absolute">
                    <FloralPattern pattern="vine" size="lg" />
                </div>
            </div>

            <div className="z-10 relative mx-auto container">
                {/* Section Header */}
                <div className="space-y-6 mb-16 text-center">
                    <h2 className="font-serif font-bold text-sage-800 text-3xl md:text-4xl lg:text-5xl">
                        Đội Ngũ Phát Triển
                    </h2>

                    <div className="flex justify-center">
                        <FrenchOrnament size="lg" variant="divider" />
                    </div>

                    <p className="mx-auto max-w-3xl font-sans text-sage-600 text-lg md:text-xl leading-relaxed">
                        Những tài năng xuất sắc đã cùng nhau kiến tạo nên Donace -
                        từ ý tưởng ban đầu đến sản phẩm hoàn thiện
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
                    {teamMembers.map((member, index) => (
                        <div key={member.id} className="flex justify-center">
                            <MemberCard member={member} index={index} />
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Section */}
                <div className="mt-16 text-center">
                    <div className="flex justify-center space-x-6 mb-8">
                        <FloralPattern pattern="rose" size="md" className="opacity-60" />
                        <FrenchOrnament size="md" variant="divider" className="opacity-80" />
                        <FloralPattern pattern="vine" size="md" className="opacity-60" />
                    </div>                    <p className="mx-auto max-w-2xl font-serif text-sage-600 text-lg italic">
                        &ldquo;Thành công không đến từ một cá nhân, mà từ sức mạnh của cả đội ngũ&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
};
