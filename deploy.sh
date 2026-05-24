#!/bin/bash
set -e

cd /home/harry/2026/rolean

echo "[$(date)] Starting deployment..."

# Pull latest changes
git fetch origin main
git reset --hard origin/main

# Install dependencies
npm install

# Build
npm run build

# Restart pm2
pm2 restart rolean

echo "[$(date)] Deployment complete!"
