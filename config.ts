export type TokenHubRegion = "cn" | "intl" | "cn-alt" | "intl-alt";

export const TOKENHUB_BASE_URLS: Record<TokenHubRegion, string> = {
  cn: "https://tokenhub.tencentmaas.com/v1",
  intl: "https://tokenhub-intl.tencentmaas.com/v1",
  "cn-alt": "https://tokenhub.tencentmaas.cn/v1",
  "intl-alt": "https://tokenhub-intl.tencentmaas.cn/v1",
};

export function resolveTokenHubBaseUrl(region: string | undefined, override?: string): string {
  if (override?.trim()) {
    return override.trim().replace(/\/$/, "");
  }

  const key = (region?.trim().toLowerCase() || "cn") as TokenHubRegion;
  return TOKENHUB_BASE_URLS[key] ?? TOKENHUB_BASE_URLS.cn;
}
