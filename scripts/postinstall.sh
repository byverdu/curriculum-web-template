#!/usr/bin/env bash
 
if [[ "$skip_postinstall" == "yes" ]]; then
  echo -e "\\x1b[31m cv-web-template -> Skipping your package's postinstall routine. \\x1b[0m";
  exit 0;
fi

# Running the build if skip_postinstall is not set in the terminal
yarn build