# Artists and Hackers

This is the website for [Artists and Hackers](http://artistsandhackers.org) podcast.

This README contains info for building the site locally, using Jekyll as the Static Site Generator, and for making and editing pages.

Episode pages are markdown files with frontmatter, placed in ```podcasts/_posts/```. 

## Set up the environment

* Clone the website repo
```
git clone https://github.com/Artists-and-Hackers/artists-and-hackers.github.io.git
cd artists-and-hackers.github.io
```
* Use your package manager or manually install ruby and ruby-devel. The development package name depends on what distro of Linux (or Mac) you're running.
* If you've already got an old jekyll installation, I found I had to I remove the old Gemfile lock: ```mv Gemfile.lock old.Gemfile.lock```.
* Install jekyll and the bundler program. ```sudo gem install bundler jekyll```

## Build/Run Local server

```
bundle exec jekyll serve --baseurl ''
```

### Transcriptions 

Transcripts are html files placed in ```_includes/transcripts```.

The ep#.html output should be raw html. Don’t include the html code ```<!DOCTYPE html><html><head></head><body>``` before, nor ```</body></html>``` afterward.

To convert markdown to raw html with pandoc, use Lee’s template [raw_html](https://github.com/lee2sman/dotfiles/blob/linux/.pandoc/templates/raw_html.html).

The file should be placed in a .pandoc/templates folder in the home directory (such as ~/.pandoc/templates ) which you will need to create if not already on  your system. You can find the location of the expected directory from running ```pandoc --version```.

The pandoc command to convert will then be


```
pandoc -s origin.md --template=raw_html -o output.html
```

### Frontmatter tags

In the Front Matter of every episode post, you must list the tags both in a readable format in an array:

```yaml
tags: ["Radical Technology", "Technological Criticality"]
```

and as a format without spaces or caps:

```yaml
code_tags: ["radical_technology", "technological_criticality"]
```

For every new tag that you would like to use, you have to edit the javascript and add a block of code that looks like this:

```js
//Tag Name
    if (selected == "Tag Name in Human Format") {
      if (tag.classList.contains('tag_name_in_computer_format')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('tag_name_in_computer_format') == false) {
        tag.style.display = "none"
      }
    }
```

**Important: everything must be spelled correctly in the yaml file** for this to work.

### Podcast Player:

The url for each episode is contained in the Front Matter of each episode post like so:

```yaml
fileLink: "https://mcdn.podbean.com/mf/web/abcd/NEWEST_NEW_EPISODEabcd1234.mp3"
```

This will be populated for each episode post via the data attribute

```html
data-fileLink="{{ post.fileLink }}"
```

This link is then fed into Javascript using the getAttribute() tag:

```js
let ep = document.querySelectorAll("section.episode")

ep.forEach(item => {
  let url = item.getAttribute('data-fileLink')
});
```

