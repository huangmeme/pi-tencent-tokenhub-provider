const ZERO_COST = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 } as const;

export const DEEPSEEK_COMPAT = {
  supportsReasoningEffort: true,
  requiresReasoningContentOnAssistantMessages: true,
} as const;

/** DeepSeek V4 on TokenHub defaults to high reasoning effort. */
export const DEEPSEEK_THINKING_LEVEL_MAP = {
  minimal: null,
  low: null,
  medium: null,
  high: "high",
  xhigh: "high",
} as const;

export interface TokenHubModel {
  id: string;
  name: string;
  reasoning: boolean;
  input: ("text" | "image")[];
  cost: { input: number; output: number; cacheRead: number; cacheWrite: number };
  contextWindow: number;
  maxTokens: number;
  description: string;
  thinkingLevelMap?: Record<string, string | null>;
  compat?: {
    supportsReasoningEffort?: boolean;
    requiresReasoningContentOnAssistantMessages?: boolean;
  };
}

export const DEFAULT_MODEL_ID = "deepseek-v4-flash-202605";

export const TOKENHUB_MODELS: TokenHubModel[] = [
  {
    id: "deepseek-v4-flash-202605",
    name: "DeepSeek V4 Flash",
    reasoning: true,
    input: ["text"],
    contextWindow: 262144,
    maxTokens: 32768,
    cost: ZERO_COST,
    description: "DeepSeek V4 Flash on Tencent TokenHub",
    thinkingLevelMap: DEEPSEEK_THINKING_LEVEL_MAP,
    compat: DEEPSEEK_COMPAT,
  },
  {
    id: "deepseek-v4-pro-202606",
    name: "DeepSeek V4 Pro",
    reasoning: true,
    input: ["text"],
    contextWindow: 262144,
    maxTokens: 32768,
    cost: ZERO_COST,
    description: "DeepSeek V4 Pro on Tencent TokenHub",
    thinkingLevelMap: DEEPSEEK_THINKING_LEVEL_MAP,
    compat: DEEPSEEK_COMPAT,
  },
];

export function toProviderModels(models: TokenHubModel[]) {
  return models.map(
    ({ id, name, reasoning, input, cost, contextWindow, maxTokens, thinkingLevelMap, compat }) => ({
      id,
      name,
      reasoning,
      input,
      cost,
      contextWindow,
      maxTokens,
      ...(thinkingLevelMap ? { thinkingLevelMap } : {}),
      ...(compat ? { compat } : {}),
    }),
  );
}
