#!/bin/bash

CWD=$(pwd)

yarn pbjs  --keep-case   -p "${CWD}/src/proto" -t static-module -w commonjs -o "${CWD}/src/proto/generated/js/compiled.js" operation.proto
yarn pbjs -p "${CWD}/src/proto/generated/js" -o "${CWD}/src/proto/generated/ts/compiled.d.ts" compiled.js