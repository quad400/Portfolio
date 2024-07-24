import Home from "@/components/home";
import Services from "@/components/services";
import Work from "@/components/work";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

export default function MainPage() {
  return (
    <main>
      <Home />
      <Services />
      <Work />
      <Resume />
      <Contact />
    </main>
  );
}
