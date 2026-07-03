import type { OAuthCredentials, OAuthLoginCallbacks } from "@mariozechner/pi-ai";

export const TOKENHUB_API_KEY_ENV = "TOKENHUB_API_KEY";

export function cleanApiKey(apiKey: string): string {
  if (apiKey.startsWith("oauth:")) {
    return apiKey.slice(6);
  }
  return apiKey;
}

export function createTokenHubOAuth(displayName: string) {
  return {
    name: displayName,
    async login(callbacks: OAuthLoginCallbacks): Promise<OAuthCredentials> {
      const apiKey = await callbacks.onPrompt({
        message: "Enter your Tencent TokenHub API key:",
      });
      if (!apiKey || apiKey.trim() === "") {
        throw new Error("API key is required");
      }
      return {
        access: apiKey.trim(),
        refresh: "",
        expires: Date.now() + 1000 * 60 * 60 * 24 * 365 * 10,
      };
    },
    async refreshToken(credentials: OAuthCredentials): Promise<OAuthCredentials> {
      if (credentials.expires > Date.now()) {
        return credentials;
      }
      return { access: "", refresh: "", expires: 0 };
    },
    getApiKey(credentials: OAuthCredentials): string {
      return cleanApiKey(credentials.access);
    },
  };
}
