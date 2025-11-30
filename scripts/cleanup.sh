#!/bin/bash
echo "🧹 Cleaning up Docker containers..."

# Stop and remove containers
docker stop italy-app 2>/dev/null || true
docker rm italy-app 2>/dev/null || true

echo "✅ Cleanup completed"
