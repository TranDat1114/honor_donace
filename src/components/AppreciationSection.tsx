import React from 'react';
import { FrenchOrnament } from './decorative/FrenchOrnament';
import { FloralPattern } from './decorative/FloralPattern';
import { IvyBorder } from './decorative/IvyBorder';
import { projectInfo } from '../data/members';

export const AppreciationSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-warmBeige-100 via-cream to-lavender-100 px-4 py-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="top-1/4 left-10 absolute rotate-12">
                    <FloralPattern pattern="bouquet" size="lg" />
                </div>
                <div className="top-1/3 right-10 absolute -rotate-12">
                    <FloralPattern pattern="rose" size="lg" />
                </div>
                <div className="bottom-1/4 left-1/4 absolute rotate-45">
                    <FloralPattern pattern="vine" size="lg" />
                </div>
                <div className="right-1/4 bottom-1/3 absolute -rotate-45">
                    <FloralPattern pattern="bouquet" size="lg" />
                </div>
            </div>

            <div className="z-10 relative mx-auto container">
                <IvyBorder variant="around" className="mx-auto max-w-5xl">
                    <div className="bg-gradient-to-br from-white/80 to-cream/80 shadow-2xl backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl">
                        {/* Header */}
                        <div className="space-y-6 mb-12 text-center">
                            <div className="flex justify-center">
                                <FrenchOrnament size="lg" variant="frame" />
                            </div>

                            <h2 className="font-serif font-bold text-sage-800 text-3xl md:text-4xl lg:text-5xl">
                                Lời Cảm Ơn Chân Thành
                            </h2>

                            <div className="flex justify-center">
                                <FrenchOrnament size="md" variant="divider" />
                            </div>
                        </div>

                        {/* Main Appreciation Message */}
                        <div className="space-y-8 text-center">
                            <div className="mx-auto max-w-4xl">
                                <p className="mb-8 font-sans text-sage-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    {projectInfo.appreciationMessage}
                                </p>
                            </div>

                            {/* Highlighted achievements */}
                            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-12">
                                <div className="space-y-3 text-center">
                                    <div className="flex justify-center">
                                        <FloralPattern pattern="rose" size="md" className="text-dustyRose-400" />
                                    </div>
                                    <h3 className="font-serif font-semibold text-sage-800 text-xl">Sáng Tạo</h3>
                                    <p className="font-sans text-sage-600">
                                        Những ý tưởng độc đáo và giải pháp sáng tạo
                                    </p>
                                </div>

                                <div className="space-y-3 text-center">
                                    <div className="flex justify-center">
                                        <FloralPattern pattern="bouquet" size="md" className="text-lavender-400" />
                                    </div>
                                    <h3 className="font-serif font-semibold text-sage-800 text-xl">Tận Tâm</h3>
                                    <p className="font-sans text-sage-600">
                                        Sự cống hiến không ngừng nghỉ cho dự án
                                    </p>
                                </div>

                                <div className="space-y-3 text-center">
                                    <div className="flex justify-center">
                                        <FloralPattern pattern="vine" size="md" className="text-sage-400" />
                                    </div>
                                    <h3 className="font-serif font-semibold text-sage-800 text-xl">Đồng Đội</h3>
                                    <p className="font-sans text-sage-600">
                                        Tinh thần làm việc nhóm vượt trội
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="bg-gradient-to-r from-sage-50 to-dustyRose-50 mt-12 p-8 border border-sage-200 rounded-2xl">
                                <blockquote className="font-serif text-sage-800 text-xl md:text-2xl text-center italic">
                                    "Không có thành công nào đạt được mà không có sự đóng góp của từng thành viên.
                                    Donace là minh chứng cho sức mạnh của tinh thần đồng đội và tầm nhìn chung."
                                </blockquote>
                                <div className="flex justify-center mt-6">
                                    <FrenchOrnament size="sm" variant="divider" />
                                </div>
                            </div>

                            {/* Final message */}
                            <div className="space-y-4 mt-12">
                                <p className="font-sans text-sage-600 text-lg leading-relaxed">
                                    Cảm ơn tất cả các bạn đã làm cho Donace trở thành hiện thực.
                                    Hành trình này sẽ tiếp tục với nhiều thành tựu mới trong tương lai.
                                </p>

                                <div className="flex justify-center space-x-4 pt-6">
                                    <FloralPattern pattern="rose" size="sm" className="opacity-70" />
                                    <FloralPattern pattern="vine" size="sm" className="opacity-70" />
                                    <FloralPattern pattern="bouquet" size="sm" className="opacity-70" />
                                </div>
                            </div>
                        </div>
                    </div>
                </IvyBorder>
            </div>
        </section>
    );
};
