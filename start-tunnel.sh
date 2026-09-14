#!/bin/bash
echo "Starting Cloudflare Tunnel for Opsus Pharmaceuticals on port 3000..."
/opt/homebrew/bin/cloudflared tunnel --url http://localhost:3000
