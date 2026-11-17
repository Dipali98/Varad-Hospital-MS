import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("should display the hospital logo", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("img", { name: /hospital logo/i }),
    ).toBeInTheDocument();
  });

  test("should display the hospital name", () => {
    render(<Navbar />);

    expect(screen.getByText(/varad hospital/i)).toBeInTheDocument();
  });

  test("should display the notification button", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("button", { name: /notifications/i }),
    ).toBeInTheDocument();
  });
});
