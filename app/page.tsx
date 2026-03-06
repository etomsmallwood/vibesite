import { Nav } from "./_sections/nav";
import { Hero } from "./_sections/hero";
import { Brands } from "./_sections/brands";
import { CaseStudies } from "./_sections/case-studies";
import { Testimonials } from "./_sections/testimonials";
import { Contact } from "./_sections/contact";
import { Footer } from "./_sections/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Brands />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
