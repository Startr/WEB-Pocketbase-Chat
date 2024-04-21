#!/bin/bash

# Detect OS
os=$(uname -s)
case "$os" in
    Darwin)
        os="darwin"
        ;;
    Linux)
        os="linux"
        ;;
    *CYGWIN*|*MINGW*|*MSYS*)
        os="windows"
        ;;
    *)
        echo "Unsupported OS: $os"
        exit 1
        ;;
esac

# Detect Architecture
arch=$(uname -m)
case "$arch" in
    x86_64)
        arch="amd64"
        ;;
    aarch64 | arm64)
        arch="arm64"
        ;;
    *)
        echo "Unsupported architecture: $arch"
        exit 1
        ;;
esac

# Print final architecture decision for debugging
echo "Using architecture: $arch"

# Construct the filename
filename="pocketbase versions/pocketbase_0.22.9_${os}_${arch}.zip"

# Check if file exists
if [ -e "$filename" ]; then
    echo "Found file: $filename"
    # You can add commands here to do something with the file, e.g., unzip it
else
    echo "File does not exist: $filename"
    exit 1
fi
