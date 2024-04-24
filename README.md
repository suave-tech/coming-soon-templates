# Installation

After downloading the file from Themeforest, You will find Deadline.zip file. Then unzip the Deadline.zip and run the following commands on Deadline folder to get started with the project.

```
yarn
```

```
// For starting NextJs Server run
yarn dev
```

NextJs Server will start in `localhost:3000`

Available routes are below

```
/one
/two
/three
/four
/five
/six
/seven
/eight
/nine
/ten
/elevel
/twelve
/thirteen
/fourteen
and so on …
```

<br/><br/>

# Folder Structure

```
—>common [All the common resource throughout the project]
	/data
		/social-share
		/translation
	/demoSwitcher
	/hooks
	/LanguageSwitcher
	/static
	/theme
	/ui
—>components [Components throughout the project ]

—>pages [all the coming soon template]
```

# Style

All the css of the templates are under common/ui and you will find the file by template name

# Development

Follow the below procedure to go with the development process.

## Procedure

For using any specific template, please follow the procedure. Suppose you want the template which is under `/one` route.

1. Go to `pages/one.js`
2. now copy all the content from `one.js`
3. Paste all the content in `pages/index.js`

# Data

Theres two folders in `/common/data` folder

### /social-share

`/social-share` folder contains template specific social share data like `/social-share/one.js` contains data for `/pages/one.js` template

### /translation

In this folder, you will find all the translations that we have used in our template . We have used `react-intl` (https://github.com/formatjs/react-intl) to Internationalise our template . You can translate the template into any language you want. We have already given support for 6 languages. They are English(en), Arabic(ar), German(de), Spanish(es), Chinese(zh) and Hebrew(he).

We have also provided Right to Left(RTL) alignment supports.

<br/><br/>

## SendGrid Integration

1. Go to , `next.config.js` find the code section and put your SendGrid Api Key there.

```
const nextConfig = {
	env: { SENDGRID_API_KEY: 'Put your SendGrid Api Key here' }
}
```

NOTE: We have commented out the sendgrid implementation, you will able to use that code that way or you can run separate node js server to send it to your sendgrid. it's upto you.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### NextJs Build

To build the nextjs version run below commands.

```
yarn build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.
yarn start
```

<br/><br/>

## Deployment Support

### Vercel Deployment

run below command after vercel deployment

```
vercel
```

and then follow the suggested command step by step

> **Make sure you have `vercel-cli` installed in your system.**
