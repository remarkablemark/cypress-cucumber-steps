#!/bin/bash

DOCS_DIRECTORY='docs'
NOT_FOUND_PATH="$DOCS_DIRECTORY/404.html"

npm run docs

# https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-app-spa-rendering
cp $DOCS_DIRECTORY/index.html $NOT_FOUND_PATH

README_START='<!-- readme-content-start -->'
README_END='<!-- readme-content-end -->'
README_PLACEHOLDER='<!-- readme-content-placeholder -->'
README_REPLACEMENT='<h1>Not Found</h1>'

# https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
if [[ $CF_PAGES == '1' ]]; then
  BASE_URL='/'
fi

if [[ $(uname) == 'Linux' ]]; then
  sed -i "/$README_START/,/$README_END/d" $NOT_FOUND_PATH
  sed -i "s|$README_PLACEHOLDER|$README_REPLACEMENT|" $NOT_FOUND_PATH

  for path in 'assets/' 'functions/' 'interfaces/' 'modules/' 'types/'; do
    sed -i "s|$path|${BASE_URL}${path}|g" $NOT_FOUND_PATH
  done
elif [[ $(uname) == 'Darwin' ]]; then
  sed -i '' "/$README_START/,/$README_END/d" $NOT_FOUND_PATH
  sed -i '' "s|$README_PLACEHOLDER|$README_REPLACEMENT|" $NOT_FOUND_PATH

  for path in 'assets/' 'functions/' 'interfaces/' 'modules/' 'types/'; do
    sed -i '' "s|$path|${BASE_URL}${path}|g" $NOT_FOUND_PATH
  done
fi

echo "Created $NOT_FOUND_PATH"

# https://community.cloudflare.com/t/functions-dir-is-ignored-in-deploy/438211
# https://github.com/cloudflare/workers-sdk/issues/2240
if [[ $CF_PAGES == '1' ]]; then
  mv $DOCS_DIRECTORY/functions $DOCS_DIRECTORY/function
  echo "Renamed /functions directory"

  # https://developers.cloudflare.com/pages/platform/redirects/
  cat > $DOCS_DIRECTORY/_redirects <<EOL
/functions/* /function/:splat
EOL
  echo "Created _redirects"
fi
