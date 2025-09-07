import { useEffect } from "react";
import { useLocation } from "wouter";

const Index = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to the home page
    setLocation("/");
  }, [setLocation]);

  return null;
};

export default Index;
