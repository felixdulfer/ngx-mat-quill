#!/bin/bash

# Deploy script for @felixdulfer/ngx-mat-quill
# This script bumps the version, builds the library, and publishes to npm

set -e # Exit on any error

echo "🚀 Starting deployment for @felixdulfer/ngx-mat-quill"

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "❌ Error: You must be on the main branch to deploy"
  echo "Current branch: $CURRENT_BRANCH"
  exit 1
fi

# Check if working directory is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Error: Working directory is not clean. Please commit or stash your changes."
  git status --short
  exit 1
fi

# Check if we have the required tools
if ! command -v conventional-recommended-bump &>/dev/null; then
  echo "❌ Error: conventional-recommended-bump is not installed"
  echo "Please install it with: npm install -g conventional-recommended-bump"
  exit 1
fi

if ! command -v conventional-changelog &>/dev/null; then
  echo "❌ Error: conventional-changelog is not installed"
  echo "Please install it with: npm install -g conventional-changelog"
  exit 1
fi

# Check if conventional-changelog-angular is installed (locally or globally)
if ! npm list -g conventional-changelog-angular &>/dev/null; then
  echo "❌ Error: conventional-changelog-angular is not installed"
  echo "Please install it with: npm install -g conventional-changelog-angular"
  exit 1
fi

# Get the recommended version bump
echo "📊 Determining version bump..."
BUMP_TYPE=$(conventional-recommended-bump -p angular)

if [ -z "$BUMP_TYPE" ]; then
  echo "❌ Error: Could not determine version bump type"
  exit 1
fi

echo "📈 Recommended bump type: $BUMP_TYPE"

# Get current version
CURRENT_VERSION=$(node -p "require('./projects/ngx-mat-quill/package.json').version")
echo "📋 Current version: $CURRENT_VERSION"

# Calculate new version
if [ "$BUMP_TYPE" = "major" ]; then
  NEW_VERSION=$(node -e "
        const version = '$CURRENT_VERSION'.split('.');
        version[0] = parseInt(version[0]) + 1;
        version[1] = 0;
        version[2] = 0;
        console.log(version.join('.'));
    ")
elif [ "$BUMP_TYPE" = "minor" ]; then
  NEW_VERSION=$(node -e "
        const version = '$CURRENT_VERSION'.split('.');
        version[1] = parseInt(version[1]) + 1;
        version[2] = 0;
        console.log(version.join('.'));
    ")
else
  NEW_VERSION=$(node -e "
        const version = '$CURRENT_VERSION'.split('.');
        version[2] = parseInt(version[2]) + 1;
        console.log(version.join('.'));
    ")
fi

echo "🆕 New version: $NEW_VERSION"

# Confirm with user
read -p "Do you want to proceed with version $NEW_VERSION? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Deployment cancelled"
  exit 1
fi

# Update version in package.json
echo "📝 Updating version in package.json..."
node -e "
    const fs = require('fs');
    const packagePath = './projects/ngx-mat-quill/package.json';
    const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    package.version = '$NEW_VERSION';
    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2) + '\n');
"

# Build the library
echo "🔨 Building library..."
ng build ngx-mat-quill

# Check if build was successful
if [ ! -d "dist/ngx-mat-quill" ]; then
  echo "❌ Error: Build failed - dist/ngx-mat-quill directory not found"
  exit 1
fi

# Navigate to dist directory and publish
echo "📦 Publishing to npm..."
cd dist/ngx-mat-quill

# Check if user is logged in to npm
if ! npm whoami &>/dev/null; then
  echo "❌ Error: Not logged in to npm. Please run 'npm login' first."
  exit 1
fi

# Publish to npm
npm publish --access public

echo "✅ Successfully published @felixdulfer/ngx-mat-quill@$NEW_VERSION to npm"

# Go back to root directory
cd ../..

# Create git tag
echo "🏷️ Creating git tag..."
git add projects/ngx-mat-quill/package.json
git commit -m "chore: bump version to $NEW_VERSION"
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION"

# Push changes and tags
echo "📤 Pushing to git..."
git push origin main
git push origin "v$NEW_VERSION"

echo "🎉 Deployment completed successfully!"
echo "📦 Package: @felixdulfer/ngx-mat-quill@$NEW_VERSION"
echo "🏷️ Tag: v$NEW_VERSION"
