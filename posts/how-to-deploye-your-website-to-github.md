---
title: How to deploy your website to github
excerpt: "In this article, I'm going to show you how I deploy websites using Github pages."
date: 'September 2, 2020'
cover: '/images/posts/github.png'
cover_alt: 'Github logo'
tags: ['github', 'deployment']
---

Github pages allow us to easily deploy websites as long as they don't have any backend. In this article, I'm going to show you how I deploy websites using Github pages.

## Create a repo

You can't deploy on Github pages without a repository that contains all your files so make sure you have the repo ready.

## Install gh pages

Next, you have to install the package gh-pages in your repository.

```npm
npm install gh-pages
```

## Add this script to package.json

In the package.json file add this script.

```json
"homepage": "https://[github-username].github.io/[github-repository-name]"
```

## Create a deploy script

Inside the scripts object in package.json file add the following script.

```json
"publish": "gh-pages -d src"
```

This script will deploy to Github pages anything in the src directory. You can change src to the name of the directory containing the files you want to deploy.

## Run the script

Next, run the publish script in your command line to deploy to gh-pages.

```bash
npm run publish
```

It may take a bit of time but when it's done you'll see a line that says published.

## Change the source branch in the repository settings

For your website to be deployed successfully, you'll have to go into the settings of your repository. In the Github pages section change the source branch from master to gh-pages. This branch was created when the publish script was run successfully.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ipzyr20jk1kmlbqasrot.PNG)

Once done, go to the url provided and you'll see your live website.
