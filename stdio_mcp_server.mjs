#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "startupsgallery",
  boardId: "startupsgallery-official",
  domain: "startups.gallery",
  npmName: "zc-startupsgallery-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
