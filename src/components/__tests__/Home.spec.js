import renderWithRouter from "../../utils/renderWithRouter";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("[Home]", () => {
  test("[/] renders without crashing with default information", async () => {
    const { getByText } = renderWithRouter("/");

    await waitFor(() => {
      expect(getByText("👚 Mytheresa FE Challenge 👒")).toBeInTheDocument();
    });
    expect(getByText("👚 Mytheresa FE Challenge 👒")).toBeInTheDocument();
    expect(getByText("See new photos")).toBeInTheDocument();
    expect(getByText("Search photos")).toBeInTheDocument();
    expect(getByText("👈 Go back!")).toBeInTheDocument();
  });
});
