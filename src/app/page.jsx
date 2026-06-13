import Hero from "../components/Hero/Hero";
import Industries from "../components/Industries/Industries";
import Service from "../components/Service/Service";
import Product from "../components/Product/Product";
import Questions from "../components/Questions/Questions";
import Support from "../components/Support/Support";

export const metadata = {
  title: "Techlab Scientific Solutions | Home",
  description: "Welcome to Techlab Scientific Solutions. We provide high-quality laboratory equipment and scientific solutions for research and industrial applications.",
  keywords: ["Techlab Scientific Solutions", "analytical instruments", "laboratory supplies", "scientific solutions", "research equipment", "Shimadzu service", "lab instrumentation"]
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <Service />
      <Product />
      <Questions />
      <Support />
    </>
  );
}
