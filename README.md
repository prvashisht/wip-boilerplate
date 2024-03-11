# Multi Domain "Under Construction" Landing Page

This project is a common "under construction" landing page for all your domains. It's designed to provide a simple and efficient way to just deploy this project, and park multiple domains. The idea is to deploy this website once, and point multiple domains to it to be able to create a common landing page.

## Features

- Common components like a header and a footer
- Dynamic website details based on the hostname
- Built with TypeScript
- Styled with Tailwind CSS

## Customizing Website Details

The website details (name, description, phone, email) are set in `plugins/websiteDetails.server.ts`. You can customize these details for different hostnames by modifying the websites object in nuxt.config.ts.

Or you can set up your environment variables as a stringified object of your domain lists. The idea is that you can deploy this website once, and point multiple domains to it to create a common landing page. Copy the `template.env` file as `.env` and add your details in there.

You can see the preview of this website on https://wip-boilerplate.pages.dev. 


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
