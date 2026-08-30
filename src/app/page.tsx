import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div>
      <main>
      <Navbar />
       <Hero />
        <Features />
        <Testimonials />
        <Stats />
        <Footer />
      </main>
    </div>
  );
}
