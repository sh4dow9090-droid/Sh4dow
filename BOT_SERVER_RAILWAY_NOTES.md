# If you prefer Railway to detect the bot-server automatically, set the service Root Directory
# to bot-server in Railway's Deploy settings instead of using this start.sh.

# This repo contains a minimal bot-server inside the bot-server/ folder.
# Options to fix Railpack detection:
# 1) Set Root Directory to bot-server when creating the Railway project (recommended).
# 2) Keep this start.sh at repository root so Railpack can run it and delegate to bot-server.
# 3) Create a top-level Dockerfile that references bot-server/Dockerfile.
