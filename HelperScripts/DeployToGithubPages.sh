#!/bin/bash -ex

echo "----------------------------------------"
echo "---Running deployment to github pages---"
echo "----------------------------------------"

cd ..
npm run build
git add dist -f 
git commit -m 'Deployment to Github Pages'
git subtree push --prefix dist origin gh-pages
git push

echo "----------------------------------------"
echo "---------------Deployed-----------------"
echo "----------------------------------------"