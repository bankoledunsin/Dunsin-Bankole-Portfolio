import AboutSection from "./components/AboutSection";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import CategoriesSection from "./components/CategoriesSection";
import HeroSection from "./components/HeroSection";
import HireMeSection from "./components/HireMeSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <AppHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HireMeSection />
      <CategoriesSection />
      <AppFooter />
    </>
  );
}

export default App;
