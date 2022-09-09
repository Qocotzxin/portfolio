import handler from "@pages/api/hygraph";
import hygraphClient from "@services/hygraphClient";
import { gql } from "graphql-request";
import { createMocks } from "node-mocks-http";

describe("/api/hygraph.", () => {
  it("Should return a 405 error when the method is not a GET.", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        locale: "test",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });

  it("Should call the hygraph client request method and return the data in the response.", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        locale: "es",
      },
    });

    await handler(req, res);
    expect(hygraphClient.request).toHaveBeenCalledTimes(1);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({
      ok: true,
      data: { test: "test" },
      message: "Successfully retrieved Hygraph data.",
    });
  });

  it("Should catch any unexpected error and return the correct error response.", async () => {
    (gql as jest.MockedFunction<typeof gql>).mockImplementation(() => {
      throw new Error("Test error");
    });

    const { req, res } = createMocks({
      method: "GET",
      query: {
        locale: "es",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({
      ok: false,
      data: null,
      message: "Could not retrieve Hygraph data.",
      description: "Test error",
    });
  });
});
