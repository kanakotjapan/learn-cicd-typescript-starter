import { describe, expect, it } from "vitest";
import { getAPIKey } from "src/api/auth";

const headers = {
  authorization: "ApiKey apikey",
};

const noHeader = {};

describe("getAPI", () => {
  it("should success", () => {
    const apikey = getAPIKey(headers);
    expect(apikey).toBe("apikey");
  });

  it("should return null", () => {
    const failapiKey = getAPIKey(noHeader);
    expect(failapiKey).toBe(null);
  });
});

// import { IncomingHttpHeaders } from "http";
//
// export function getAPIKey(headers: IncomingHttpHeaders): string | null {
//   const authHeader = headers["authorization"];
//   if (!authHeader) {
//     return null;
//   }
//
//   const splitAuth = authHeader.split(" ");
//   if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
//     return null;
//   }
//
//   return splitAuth[1];
// }
