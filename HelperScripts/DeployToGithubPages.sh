#!/bin/bash -ex

echo "----------------------------------------"
echo "---Running deployment to github pages---"
echo "----------------------------------------"

cd ..
npm run build
git add dist && git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages

echo "----------------------------------------"
echo "---------------Deployed-----------------"
echo "----------------------------------------"