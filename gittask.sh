#!/bin/sh
echo "\n| [prettify bookmarklet post-commit hook]"
git checkout gh-pages

# Update bookmarklet script from master branch
git checkout master -- dist lib

# update index.html & commit changes
grunt replace
git add .
git commit -m "Regenerated index.html from master branch"

git checkout master
echo "| All Done -- Use 'git push --all' instead of 'git push origin master' to push changes"