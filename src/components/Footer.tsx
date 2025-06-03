import React from 'react';
import { FrenchOrnament } from './decorative/FrenchOrnament';
import { FloralPattern } from './decorative/FloralPattern';
import { IvyBorder } from './decorative/IvyBorder';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-sage-100 to-sage-200 px-4 py-16">
            <IvyBorder variant="top" className="mx-auto container">
                <div className="space-y-8 mx-auto pt-8 max-w-4xl text-center">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            <FrenchOrnament size="md" variant="divider" />
                        </div>

                        <h3 className="font-serif font-bold text-sage-800 text-2xl md:text-3xl">
                            Donace Platform
                        </h3>

                        <p className="font-sans text-sage-600 text-lg">
                            Event Management and Tickets Platform
                        </p>
                    </div>

                    {/* Project Information */}
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 py-8">
                        <div className="space-y-4">
                            <div className="flex justify-center md:justify-start">
                                <FloralPattern pattern="vine" size="sm" className="opacity-60" />
                            </div>
                            <h4 className="font-serif font-semibold text-sage-800 text-xl">
                                Về Dự Án
                            </h4>
                            <p className="font-sans text-sage-600 text-left leading-relaxed">
                                Donace là một nền tảng quản lý sự kiện và bán vé hiện đại,
                                được phát triển với công nghệ tiên tiến và trải nghiệm người dùng tối ưu.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-center md:justify-start">
                                <FloralPattern pattern="bouquet" size="sm" className="opacity-60" />
                            </div>
                            <h4 className="font-serif font-semibold text-sage-800 text-xl">
                                Tầm Nhìn
                            </h4>
                            <p className="font-sans text-sage-600 text-left leading-relaxed">
                                Trở thành nền tảng hàng đầu trong việc kết nối người tổ chức
                                và người tham gia sự kiện thông qua công nghệ.
                            </p>
                        </div>
                    </div>

                    {/* Team Achievement */}
                    <div className="space-y-6 bg-gradient-to-r from-warmBeige-50 to-dustyRose-50 p-8 rounded-2xl">
                        <div className="flex justify-center">
                            <FrenchOrnament size="lg" variant="frame" className="opacity-80" />
                        </div>

                        <h4 className="font-serif font-semibold text-sage-800 text-xl md:text-2xl">
                            Thành Tựu Đội Ngũ
                        </h4>

                        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                            <div className="space-y-2 text-center">
                                <div className="font-bold text-dustyRose-600 text-2xl md:text-3xl">6</div>
                                <div className="font-sans text-sage-600">Thành viên tài năng</div>
                            </div>
                            <div className="space-y-2 text-center">
                                <div className="font-bold text-lavender-600 text-2xl md:text-3xl">1</div>
                                <div className="font-sans text-sage-600">Sản phẩm hoàn thiện</div>
                            </div>
                            <div className="space-y-2 text-center">
                                <div className="font-bold text-sage-600 text-2xl md:text-3xl">∞</div>
                                <div className="font-sans text-sage-600">Tiềm năng phát triển</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex justify-center space-x-6 py-6">
                        <FloralPattern pattern="rose" size="sm" className="opacity-50" />
                        <FrenchOrnament size="sm" variant="divider" className="opacity-70" />
                        <FloralPattern pattern="vine" size="sm" className="opacity-50" />
                    </div>

                    {/* Copyright */}
                    <div className="space-y-4 text-center">
                        <p className="font-sans text-sage-500 text-sm">
                            © {currentYear} Donace Platform. Được phát triển với ❤️ bởi đội ngũ tài năng.
                        </p>

                        <p className="font-sans text-sage-400 text-xs">
                            Trang vinh danh này được thiết kế để ghi nhận những đóng góp quý báu
                            của từng thành viên trong dự án Donace.
                        </p>

                        <div className="flex justify-center pt-4">
                            <FloralPattern pattern="bouquet" size="sm" className="opacity-40" />
                        </div>
                    </div>
                </div>
            </IvyBorder>
        </footer>
    );
};
