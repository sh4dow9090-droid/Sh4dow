#!/bin/sh
set -e

# Railpack sometimes fails to detect apps inside subdirectories. This script
# delegates build/run to the bot-server subdirectory so Railway can build
# and start the Node app.

cd bot-server || { echo "bot-server directory not found"; exit 1; }

echo "== Installing dependencies in bot-server =="
npm install --production

echo "== Starting bot-server =="
npm start
