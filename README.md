# Honor Donace - Landing Page Vinh Danh

Trang Landing Page vinh danh những thành viên xuất sắc đã cống hiến cho dự án **Donace** - Event Management and Tickets Platform.

## 🎨 Thiết Kế

- **Phong cách**: Cổ điển Pháp với pastel color palette
- **Màu sắc chủ đạo**: 
  - Cream (#F8F6F0)
  - Sage Green (#B8C5B8) 
  - Dusty Rose (#E8B4B8)
  - Lavender (#D4C5E8)
  - Warm Beige (#E8DCC0)
  - Muted Gold (#D4C5A9)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Decorative Elements**: Ivy vines, French ornaments, floral patterns

## 👥 Thành Viên Được Vinh Danh

1. **Trần Phú Đạt** - Developer
2. **Nguyễn Hoàng Tùng** - Developer  
3. **Trần Văn Tiếp** - Developer BE - Architect và system design
4. **Nguyễn Hiển Gia Bảo** - UX Super Frontend Developer
5. **Nguyễn Đình Hướng** - Developer - Tester
6. **Trương Thị Kiều An** - UX/UI

## 🛠 Công Nghệ

- **Framework**: Next.js 15.3.3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Custom SVG decorative elements
- **Images**: Next.js Image optimization

## 🚀 Cài Đặt và Chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build production
```bash
npm run build
npm start
```

## 📁 Cấu Trúc Dự Án

```
src/
├── app/
│   ├── globals.css          # Global styles với French classical themes
│   ├── layout.tsx           # Root layout với SEO metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # Header với logo và navigation
│   ├── Hero.tsx            # Hero section với title chính
│   ├── TeamGallery.tsx     # Gallery hiển thị team members
│   ├── MemberCard.tsx      # Card component cho từng member
│   ├── AppreciationSection.tsx # Section lời cảm ơn
│   ├── Footer.tsx          # Footer với thông tin dự án
│   └── decorative/         # Decorative components
│       ├── IvyBorder.tsx   # Ivy vine decorations
│       ├── FrenchOrnament.tsx # French classical ornaments  
│       └── FloralPattern.tsx  # Floral patterns
├── data/
│   └── members.ts          # Data của team members
└── styles/                 # Additional styles (if needed)
```

## 🎯 Tính Năng

### ✨ Visual Features
- **Responsive Design**: Hoàn toàn responsive trên tất cả devices
- **French Classical Style**: Ornaments và decorations theo phong cách cổ điển Pháp
- **Pastel Color Palette**: Màu sắc nhẹ nhàng, thanh lịch
- **Ivy Vine Decorations**: Dây leo xanh bao quanh member cards
- **Smooth Animations**: Hiệu ứng chuyển động mượt mà
- **Custom Typography**: Font chữ serif cổ điển

### 🖼 Image Features  
- **1:1 Aspect Ratio**: Tất cả ảnh members đều tỷ lệ vuông
- **Decorative Frames**: Khung ảnh với ornamental borders
- **Hover Effects**: Hiệu ứng khi hover lên member cards
- **Lazy Loading**: Tối ưu loading ảnh
- **Fallback Images**: Placeholder tự động nếu ảnh lỗi

### 🔍 SEO & Performance
- **Structured Data**: Schema markup cho organization và members
- **Open Graph**: Meta tags cho social sharing  
- **Optimized Images**: Next.js Image component với optimization
- **Fast Loading**: Performance optimizations
- **Accessibility**: ARIA labels và keyboard navigation

## 🎨 Customization

### Thay đổi thành viên
Chỉnh sửa file `src/data/members.ts`:

```typescript
export const teamMembers: Member[] = [
  {
    id: 1,
    name: "Tên thành viên",
    role: "Vị trí", 
    image: "/images/members/avatar.jpg",
    description: "Mô tả đóng góp"
  },
  // Thêm members khác...
];
```

### Thay đổi màu sắc
Chỉnh sửa `tailwind.config.ts` để thay đổi color palette.

### Thêm ảnh members
1. Thêm ảnh vào `public/images/members/`
2. Cập nhật đường dẫn trong `members.ts`
3. Ảnh nên có tỷ lệ 1:1 (vuông) để hiển thị đẹp nhất

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Gallery tự động điều chỉnh từ 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop).

## 🎭 Animations

- **Fade In**: Entrance animations cho các sections
- **Stagger**: Member cards hiện ra theo thứ tự
- **Hover Effects**: Scale và shadow transitions
- **Float**: Decorative elements có animation nhẹ nhàng
- **Smooth Scroll**: Navigation mượt mà giữa các sections

## 💝 Lời Cảm Ơn

Dự án này được tạo ra để vinh danh những đóng góp quý báu của đội ngũ phát triển Donace. Mỗi thành viên đều có vai trò quan trọng trong thành công của dự án.

---

**Donace Team** © 2025 - Được phát triển với ❤️
