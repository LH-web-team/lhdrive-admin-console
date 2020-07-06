cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/LH-web-team/lhdrive-admin-console-deploy.git master:gh-pages

cd ..