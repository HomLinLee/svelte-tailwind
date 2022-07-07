#!/bin/bash
#
branch=${GIT_BRANCH:-dev}
branch=${branch##*/}
env=$branch
echo "###       当前分支 : ${env}"
source ~/.nvm/nvm.sh
nvm list
nvm use 16
node -v
npm install
npm list --local --depth=0
npm run build:${env}
