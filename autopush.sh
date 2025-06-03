#!/bin/bash

# This script auto-adds, commits, and pushes changes to the main branch

# Prompt for commit message if not supplied
if [ -z "$1" ]; then
  echo "Enter commit message:"
  read commit_message
else
  commit_message=$1
fi

# Git commands
git add .
git commit -m "$commit_message"
git push origin main
