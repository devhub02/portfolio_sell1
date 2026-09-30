import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Resume from "../components/Resume";
import Journal from "../components/Journal";
import Explorations from "../components/Explorations";
import Stats from "../components/Stats";
import Contact from "../components/Contact";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="bg-bg">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Hero />
      <SelectedWorks />
      <Resume />
      <Journal />
      <Explorations />
      <Stats />
      <Contact />
    </div>
  );
}
