#!/bin/bash
cd /home/kavia/workspace/code-generation/globalrecipe-hub-5715-5722/main_container_for_globalrecipe_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

