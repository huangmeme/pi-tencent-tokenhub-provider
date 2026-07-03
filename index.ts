/**
 * Pi Tencent TokenHub Provider Extension
 *
 * Registers Tencent TokenHub provider for Pi with DeepSeek V4 models.
 *
 * Authentication (in order of priority):
 * 1. Pre-resolved API key from Pi runtime options
 * 2. API key from ~/.pi/agent/auth.json (via /login)
 * 3. TOKENHUB_API_KEY environment variable
 *
 * Usage:
 * pi install git:https://github.com/huangmeme/pi-tencent-tokenhub-provider
 * /login -> tencent-tokenhub
 * pi --provider tencent-tokenhub --model deepseek-v4-flash-202605
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

import { createTokenHubOAuth, TOKENHUB_API_KEY_ENV } from "./auth.ts";
import { resolveTokenHubBaseUrl } from "./config.ts";
import { toProviderModels, TOKENHUB_MODELS } from "./models.ts";

export const PROVIDER_TOKENHUB = "tencent-tokenhub";

const tokenHubOAuth = createTokenHubOAuth("Tencent TokenHub");

export default function tencentTokenHubProvider(pi: ExtensionAPI): void {
  const tokenHubBaseUrl = resolveTokenHubBaseUrl(
    process.env.TOKENHUB_REGION,
    process.env.TOKENHUB_BASE_URL,
  );

  pi.registerProvider(PROVIDER_TOKENHUB, {
    name: "Tencent TokenHub",
    baseUrl: tokenHubBaseUrl,
    apiKey: TOKENHUB_API_KEY_ENV,
    api: "openai-completions",
    models: toProviderModels(TOKENHUB_MODELS),
    oauth: tokenHubOAuth,
  });
}
