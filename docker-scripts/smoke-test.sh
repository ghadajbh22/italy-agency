#!/bin/bash
echo "🚀 Running smoke tests for Italy Agency..."

# Test if application is responding
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)

if [ "$response" -eq 200 ]; then
    echo "✅ Smoke test PASSED - Application is running (Status: $response)"
    exit 0
else
    echo "❌ Smoke test FAILED - Application not responding (Status: $response)"
    exit 1
fi
