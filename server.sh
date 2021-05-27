#!/bin/sh

exec python -m SimpleHTTPServer ${PORT:-8000}
