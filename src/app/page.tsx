import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TeamGallery } from '../components/TeamGallery';
import { AppreciationSection } from '../components/AppreciationSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Header />
      <Hero />
      <TeamGallery />
      <AppreciationSection />
      <Footer />
    </div>
  );
}
