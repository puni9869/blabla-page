<p align="center">
  <img src="https://github.com/puni9869/blabla-page/assets/80308335/198f1743-cb39-4e3b-9308-d1945ff6b7f8"/>
</p>

[![Deploy static content to Pages](https://github.com/puni9869/blabla-page/actions/workflows/static.yml/badge.svg)](https://github.com/puni9869/blabla-page/actions/workflows/static.yml)
---

## Motivation
I was searching for online tool which is easy to use and the name should be simple. This is a personalize fork of [Mark](https://github.com/barelyhuman/mark).

## Features coming soon...

- [x] Modify the menu items.
- [x] Redirect http[s]://blabla.page to https://www.blabla.page
- [x] Create a simple chrome extension.
- [ ] Publish the chrome extension in chrome store.
- [ ] Add `Clear` option in menu items.
- [ ] Add `About` page in blabla.page
- [ ] Show `History`.
- [ ] Convert blabla.page to PWA.
- [ ] Preview button on the top. 🥉

**Prerequisite**
1. [Node](https://nodejs.org/en/) at least v12 
2. [git](https://git-scm.com/)

**Steps**
```sh
# clone this repo 
git clone https://github.com/puni9869/blabla-page

# cd into it and install the basic dependencies
npm i 

# run the dev server to check if it's working (optional)
npm dev 

# build the app into static files 
npm build

# you can then serve the output folder using your favorite http serving solution 
npx serve dist
# or 
python –m SimpleHTTPServer dist
```

## License
[![](https://img.shields.io/badge/license-mit-black?style=for-the-badge)](LICENSE)

[MIT](LICENSE) &copy; Reaper (Original)

[MIT](LICENSE) &copy; blabla.page (After Fork)
