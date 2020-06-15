import renderWithRouter from "../../utils/renderWithRouter";
import { waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";

import mockQueryPhotosResponse from "../../utils/mocks/mockQueryPhotosResponse";

describe("[SearchPhotos]", () => {
  const server = setupServer(
    rest.get("https://api.unsplash.com/search/photos", (_, res, ctx) => {
      return res(ctx.json(mockQueryPhotosResponse));
    })
  );

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => server.close());

  test("Users is able to navigate to [/search-photos]", async () => {
    const { getByText } = renderWithRouter("/search-photos");

    await waitFor(() => {
      expect(getByText("Looking for pictures of")).toBeInTheDocument();
    });
  });

  test("Users is able to search for pictures on [/search-photos]", async () => {
    const { getByTestId, getByText, debug } = renderWithRouter(
      "/search-photos"
    );

    const term = "cats";

    await waitFor(() => {
      expect(getByText(`Looking for pictures of`)).toBeInTheDocument();
    });

    await userEvent.type(getByTestId("query-pictures-input"), term);

    await waitFor(() => {
      expect(getByText(`Looking for pictures of ${term}`)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(getByText("bean the cat")).toBeInTheDocument();
    });
    debug();
  });
});
