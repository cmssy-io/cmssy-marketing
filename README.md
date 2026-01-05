# cmssy-marketing

Cmssy project for building reusable UI blocks and templates.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server with hot reload (defaults to http://localhost:3000)
npm run dev

# Or specify a custom port
cmssy dev -p 3002

# Create a new block
cmssy create block my-block

# Build for production
npm run build
```

## Available Commands

### Development
```bash
# Start dev server with preview UI (uses npm script)
npm run dev

# Create a new block
cmssy create block <name>

# Create a new page template
cmssy create template <name>

# Build all blocks and templates (uses npm script)
npm run build
```

### Publishing

```bash
# Configure API credentials (run once)
cmssy configure

# MARKETPLACE PUBLISH (public, requires review)
cmssy publish hero --marketplace                 # single block
cmssy publish hero pricing --marketplace         # multiple blocks
cmssy publish --all --marketplace                # all blocks/templates
cmssy publish hero --marketplace --patch         # with version bump

# WORKSPACE PUBLISH (private, no review)
cmssy publish hero --workspace ws_abc123         # explicit workspace ID
cmssy publish --all --workspace                  # uses CMSSY_WORKSPACE_ID from .env
cmssy publish hero -w ws_abc123 --minor          # with version bump

# Preview what would be published
cmssy publish --all --marketplace --dry-run
```

### Syncing from Marketplace
```bash
# Pull a specific block from marketplace
cmssy sync @vendor/blocks.hero --workspace ws_abc123

# Pull all installed packages
cmssy sync --workspace ws_abc123
```

## Project Structure

```
cmssy-marketing/
├── blocks/              # Your UI blocks
│   └── hero/
│       ├── src/
│       │   ├── index.tsx
│       │   ├── Hero.tsx
│       │   └── index.css
│       ├── package.json
│       └── preview.json
├── templates/           # Your page templates
├── public/              # Build output
├── cmssy.config.js      # Project configuration
├── .env                 # API credentials (created by configure)
└── .env.example         # API credentials template
```

## Configuration

Edit `cmssy.config.js` to customize:
- Framework (react)
- Author information
- Build settings

## Framework

- react

## Author

-  

## Documentation

For more information, visit: https://cmssy.io/docs
