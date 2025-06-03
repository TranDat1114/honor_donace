export interface Member {
    id: number;
    name: string;
    role?: string;
    image: string;
    description?: string;
}

export const teamMembers: Member[] = [
    {
        id: 1,
        name: "Trần Phú Đạt",
        role: "Developer",
        image: "/images/members/tran-phu-dat.jpg",
        description: "Đóng góp tích cực trong việc phát triển hệ thống"
    },
    {
        id: 2,
        name: "Nguyễn Hoàng Tùng",
        role: "Developer",
        image: "/images/members/nguyen-hoang-tung.jpg",
        description: "Chuyên gia về frontend và user experience"
    },
    {
        id: 3,
        name: "Trần Văn Tiếp",
        role: "Developer",
        image: "/images/members/tran-van-tiep.jpg",
        description: "Kỹ sư backend và database"
    },
    {
        id: 4,
        name: "Nguyễn Hiển Gia Bảo",
        role: "Developer",
        image: "/images/members/nguyen-hien-gia-bao.jpg",
        description: "Chuyên gia phát triển tính năng"
    },
    {
        id: 5,
        name: "Nguyễn Đình Hướng",
        role: "Developer",
        image: "/images/members/nguyen-dinh-huong.jpg",
        description: "Architect và system design"
    },
    {
        id: 6,
        name: "Trương Thị Kiều An",
        role: "Developer",
        image: "/images/members/truong-thi-kieu-an.jpg",
        description: "UI/UX Designer và Frontend Developer"
    }
];

export const projectInfo = {
    name: "Donace",
    description: "Event Management and Tickets Platform",
    tagline: "Nền tảng quản lý sự kiện và bán vé hiện đại",
    appreciationMessage: "Chúng tôi xin chân thành cảm ơn tất cả các thành viên đã đóng góp không ngừng nghỉ để xây dựng nên dự án Donace - một nền tảng quản lý sự kiện và bán vé tiên tiến. Sự tận tâm, sáng tạo và tinh thần làm việc nhóm của các bạn đã tạo nên thành công này."
};
