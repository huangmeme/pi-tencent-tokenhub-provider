import { describe, expect, it } from "vitest";

import { cleanApiKey } from "./auth.js";
import { resolveTokenHubBaseUrl, TOKENHUB_BASE_URLS } from "./config.js";
import { DEFAULT_MODEL_ID, TOKENHUB_MODELS, toProviderModels } from "./models.js";

describe("cleanApiKey", () => {
  it("strips oauth prefix", () => {
    expect(cleanApiKey("oauth:sk-test")).toBe("sk-test");
  });

  it("returns plain keys unchanged", () => {
    expect(cleanApiKey("sk-test")).toBe("sk-test");
  });
});

describe("resolveTokenHubBaseUrl", () => {
  it("defaults to China endpoint", () => {
    expect(resolveTokenHubBaseUrl(undefined)).toBe(TOKENHUB_BASE_URLS.cn);
  });

  it("supports international region", () => {
    expect(resolveTokenHubBaseUrl("intl")).toBe(TOKENHUB_BASE_URLS.intl);
  });

  it("allows explicit override", () => {
    expect(resolveTokenHubBaseUrl("cn", "https://custom.example.com/v1/")).toBe(
      "https://custom.example.com/v1",
    );
  });
});

describe("models", () => {
  it("only includes the two DeepSeek V4 models", () => {
    expect(TOKENHUB_MODELS.map((model) => model.id)).toEqual([
      "deepseek-v4-flash-202605",
      "deepseek-v4-pro-202606",
    ]);
  });

  it("defaults to deepseek-v4-flash-202605", () => {
    expect(DEFAULT_MODEL_ID).toBe("deepseek-v4-flash-202605");
  });

  it("maps provider models without descriptions", () => {
    const mapped = toProviderModels(TOKENHUB_MODELS);
    expect(mapped[0]).not.toHaveProperty("description");
    expect(mapped[0]?.id).toBe("deepseek-v4-flash-202605");
  });
});
