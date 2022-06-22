# LoveIt-rtl & tailwindcss

Orginal repo [LoveIt](https://github.com/dillonzq/LoveIt)

LoveIt-tailwindcss is buliding from code of LoveIt base and add RTL support with tailwindcss.

## Our target is to make LoveIt-rtl more useful for developers.

- [*] add projects page
- [*] support RTL languages.
- [*] convert LoveIt-rtl fullly to tailwindcss.

How use LoveIt-tailwindcss?
follow the steps on this website but change from LoveIt repo to LoveIt-tailwindcss repo:

https://hugoloveit.com/theme-documentation-basics/

when you add themes to you projects use this cmd:

```git submodule add https://github.com/i99dev/LoveIt-tailwindcss.git  themes/LoveIt-tailwindcss```

and go to ` themes/LoveIt-tailwindcss` folder and run `npm install or yarn install`` 

on your project root you can create github/workflow/gh-pages.yml file and add this content:
```
name: github pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - name: Git checkout
        uses: actions/checkout@v2.3.3

      - name: Update theme
        run: git submodule update --init --recursive

      - name: Setup hugo
        uses: peaceiris/actions-hugo@v2.4.13
        with:
          hugo-version: 'latest'

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public

```
any update add to themes ou will git when you will push to master anu new content