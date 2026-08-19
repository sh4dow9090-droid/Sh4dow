Bot Server

This is a minimal placeholder bot-server intended to be deployed to Railway.

How to deploy (summary):

1. Push this repository to GitHub (this repo).
2. In Railway → New Project → Deploy from GitHub → select this repository and the `bot-server` service (the root of the project is detected automatically).
3. After Railway finishes building, open Settings → Networking → Generate Domain. Copy the generated https://...up.railway.app URL.
4. In Railway, open Settings → Variables (Environment Variables) for the service and add:

   BOT_SERVER_URL=https://...up.railway.app

   Alternatively, you can set BOT_SERVER_URL in a .env on your host, or via your app's configuration.
5. Save changes and ensure the service is running (toggle ON).

Local development:

- Copy bot-server/.env.example to .env and set BOT_SERVER_URL.
- Run:
  npm install
  npm start

Routes:
- GET / -> basic status with BOT_SERVER_URL
- GET /health -> health check
- GET /config -> returns configured BOT_SERVER_URL in JSON

