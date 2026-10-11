import { Footer, Header } from '@/components/layout';
import { useLanguage } from '@/i18n';
import { About, Contact, Education, Experience, Hero, Projects, Skills } from '@/sections';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
