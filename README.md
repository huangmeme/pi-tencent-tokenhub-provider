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
pi install npm:pi-tencent-tokenhub-provider
```

Or clone locally:

```bash
git clone https://github.com/YOUR_USER/pi-tencent-tokenhub-provider.git
cd pi-tencent-tokenhub-provider
npm install && npm run build
pi install .
```

## Usage

### Set your API key

```bash
# Recommended: /login in Pi, choose tencent-tokenhub

# Or environment variable
export TOKENHUB_API_KEY=your-api-key-here
```

### Run

```bash
pi --provider tencent-tokenhub --model deepseek-v4-flash-202605
```

### Region (optional)

```bash
export TOKENHUB_REGION=cn      # default
export TOKENHUB_REGION=intl    # Singapore
export TOKENHUB_BASE_URL=https://tokenhub.tencentmaas.com/v1
```

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
