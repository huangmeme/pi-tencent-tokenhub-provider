# Pi Provider - Tencent TokenHub

> **Note:** This is an unofficial, community-built provider. It is not affiliated with, endorsed by, or connected to Tencent Cloud.

A [Pi coding agent](https://github.com/earendil-works/pi) provider extension for [Tencent TokenHub](https://cloud.tencent.com/product/tokenhub).

## Supported Models

| Model | Context | Max input | Max output | Thinking | Cache |
|-------|---------|-----------|------------|----------|-------|
| `deepseek-v4-flash-202605` | 1M | 1M | 384K | yes | automatic |
| `deepseek-v4-pro-202606` | 1M | 1M | 384K | yes | automatic |

Per [Tencent TokenHub model list](https://cloud.tencent.com/document/product/1823/130051).

**Context caching:** DeepSeek V4 cache on TokenHub is automatic prefix caching. You do not need `cache_control` markers. Repeated identical prefixes are billed as cache hits and reported in `usage.prompt_tokens_details.cached_tokens`. Run `/reload` after updating the extension if models still show the old context size.

## Installation

```bash
git clone https://github.com/huangmeme/pi-tencent-tokenhub-provider.git
cd pi-tencent-tokenhub-provider
pi install .
```

Or install directly from GitHub:

```bash
pi install git:github.com/huangmeme/pi-tencent-tokenhub-provider
```

## Usage

### Set your API key

```bash
# Recommended: /login in Pi, choose tencent-tokenhub

# Or environment variable (PowerShell)
$env:TOKENHUB_API_KEY = "your-api-key-here"
```

### Run

```bash
pi --provider tencent-tokenhub --model deepseek-v4-flash-202605
```

### Region (optional)

```bash
$env:TOKENHUB_REGION = "cn"      # default
$env:TOKENHUB_REGION = "intl"    # Singapore
$env:TOKENHUB_BASE_URL = "https://tokenhub.tencentmaas.com/v1"
```

## License

MIT
