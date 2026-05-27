import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutUs/AboutUs";
import WhoAreWe from "../components/whoAreWe/WhoAreWe";
import StatsSection from "../components/stats/StatsSection";
import ServicesSection from "../components/services/Services";
import WorkProcess from "../components/workprocess/Workprocess";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhoAreWe />
      <WorkProcess />
      <StatsSection />
    </>
  );
}
