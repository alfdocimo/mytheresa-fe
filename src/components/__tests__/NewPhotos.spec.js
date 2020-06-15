import renderWithRouter from "../../utils/renderWithRouter";
import { waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { rest } from "msw";
import { setupServer } from "msw/node";

import mockPhotosResponse from "../../utils/mocks/mockPhotosResponse";

describe("[NewPhotos]", () => {
  const server = setupServer(
    rest.get("https://api.unsplash.com/photos", (_, res, ctx) => {
      return res(ctx.json(mockPhotosResponse));
    })
  );

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => server.close());

  test("Users is able to navigate to [/new-photos] and views pictures correctly", async () => {
    const { getByText } = renderWithRouter("/");

    await waitFor(() => {
      expect(getByText("See new photos")).toBeInTheDocument();
    });

    userEvent.click(getByText("See new photos"));

    await waitFor(() => {
      expect(getByText("Spring Blossom")).toBeInTheDocument();
    });
  });
});
