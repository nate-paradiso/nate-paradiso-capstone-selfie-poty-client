import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";

describe("App renders component children", () => {
  test("App renders hero", () => {
    render(<Hero />);
    const heroElement = screen.getByText(/What is a Selfie/i);
    expect(heroElement).toBeInTheDocument();
  });

  test("App renders footer", () => {
    render(<Footer />);
    const footerImage = screen.getByAltText("nate paradiso github logo");
    expect(footerImage).toBeInTheDocument();
  });
});
