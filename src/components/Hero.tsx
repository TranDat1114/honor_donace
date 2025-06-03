import React from 'react';
import { FrenchOrnament } from './decorative/FrenchOrnament';
import { FloralPattern } from './decorative/FloralPattern';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-warmBeige-50 to-lavender-50 px-4 py-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="top-10 left-10 absolute opacity-20">
                <FloralPattern pattern="bouquet" size="lg" />
            </div>
            <div className="right-10 bottom-10 absolute opacity-20">
                <FloralPattern pattern="rose" size="lg" />
            </div>

            <div className="z-10 relative mx-auto text-center container">
                <div className="space-y-8 mx-auto max-w-4xl">
                    {/* Main Title */}
                    <h2 className="font-serif font-bold text-sage-800 text-3xl md:text-5xl lg:text-6xl leading-tight">
                        Vinh Danh Những Người Góp Công
                    </h2>

                    {/* Ornamental divider */}
                    <div className="flex justify-center">
                        <FrenchOrnament size="lg" variant="frame" className="opacity-80" />
                    </div>

                    {/* Subtitle */}
                    <p className="mx-auto max-w-3xl font-sans text-sage-600 text-lg md:text-xl lg:text-2xl leading-relaxed">
                        Những con người tài năng đã cống hiến hết mình để xây dựng nên
                        <span className="font-semibold text-dustyRose-600"> Donace </span>
                        - một nền tảng quản lý sự kiện hiện đại và chuyên nghiệp
                    </p>

                    {/* Description */}
                    <div className="mx-auto max-w-2xl">
                        <p className="font-sans text-sage-500 text-base md:text-lg leading-relaxed">
                            Với tinh thần đồng đội, sự sáng tạo không ngừng và tầm nhìn chung,
                            chúng ta đã cùng nhau tạo nên một sản phẩm đáng tự hào.
                        </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="flex justify-center space-x-8 pt-4">
                        <FloralPattern pattern="vine" size="sm" className="opacity-60" />
                        <FloralPattern pattern="rose" size="sm" className="opacity-60" />
                        <FloralPattern pattern="vine" size="sm" className="opacity-60" />
                    </div>
                </div>
            </div>
        </section>
    );
};
