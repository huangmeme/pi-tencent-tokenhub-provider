# Pi Provider - Tencent TokenHub

> **Note:** This is an unofficial, community-built provider. It is not affiliated with, endorsed by, or connected to Tencent Cloud.

A [Pi coding agent](https://github.com/earendil-works/pi) provider extension for [Tencent TokenHub](https://cloud.tencent.com/product/tokenhub).

## Supported Models

| Model | Context | Output | Thinking | Description |
|-------|---------|--------|----------|-------------|
| `deepseek-v4-flash-202605` | 262,144 | 32,768 | yes | DeepSeek V4 Flash (default) |
| `deepseek-v4-pro-202606` | 262,144 | 32,768 | yes | DeepSeek V4 Pro |

## Installation

```bash
git clone https://github.com/huangmeme/pi-tencent-tokenhub-provider.git
cd pi-tencent-tokenhub-provider
pi install .
```

Or install directly from GitHub:

```bash
pi install git:https://github.com/huangmeme/pi-tencent-tokenhub-provider
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
