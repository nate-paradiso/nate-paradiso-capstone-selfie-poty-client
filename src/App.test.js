import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App renders component children", () => {
  test("App renders hero", () => {
    render(<App />);
    const heroElement = screen.getByText(/What is a Selfie/i);
    expect(heroElement).toBeInTheDocument();
  });

  test("App renders footer", () => {
    render(<App />);
    const footerImage = screen.getByAltText("nate paradiso github logo");
    expect(footerImage).toBeInTheDocument();
  });
});
