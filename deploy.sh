#!/bin/bash
set -e

cd /home/harry/2026/rolean
export PATH="$HOME/.npm-global/bin:$PATH"

echo "[$(date)] Starting deployment..."

# Pull latest changes
git fetch origin main
git reset --hard origin/main

# Install dependencies
npm install --include=dev

# Build
npm run build

# Restart pm2
pm2 restart rolean

echo "[$(date)] Deployment complete!"
