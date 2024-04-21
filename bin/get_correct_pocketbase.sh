#!/bin/bash
# Change to the directory where the script is located
cd "$(dirname "$0")"

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
filename="pocketbase_versions/pocketbase_0.22.9_${os}_${arch}.zip"

# Check if file exists and extract 'pocketbase' from it to directory one level up
if [ -e "$filename" ]; then
    echo "Found file: $filename"
    # Check if unzip command is available
    if command -v unzip >/dev/null; then
        # Unzip only the 'pocketbase' file to directory one level up
        unzip "$filename" pocketbase -d -o  ../
        echo "Extracted 'pocketbase' from $filename into project root"
    else
        echo "Unzip command not found. Cannot extract 'pocketbase' from $filename."
        exit 1
    fi
else
    echo "File does not exist: $filename"
    exit 1
fi
