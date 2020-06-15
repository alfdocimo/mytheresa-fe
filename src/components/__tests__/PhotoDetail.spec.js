import renderWithRouter from "../../utils/renderWithRouter";
import { waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { rest } from "msw";
import { setupServer } from "msw/node";

import mockPhotoResponse from "../../utils/mocks/mockPhotoResponse";

describe("[PhotoDetail]", () => {
  const server = setupServer(
    rest.get("https://api.unsplash.com/photos/:id", (_, res, ctx) => {
      return res(ctx.json(mockPhotoResponse));
    })
  );

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => server.close());

  test("Users is able to navigate to [/new-photos/:id] and views the selected picture correctly", async () => {
    const { getByText } = renderWithRouter("/new-photos/fogVWRn65zI");

    await waitFor(() => {
      expect(
        getByText("📍 St. Paul's Cathedral, London, UK")
      ).toBeInTheDocument();
    });
  });
});
