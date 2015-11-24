# HnTagger

A Chrome plugin to add flairs to [Hacker News](http://www.hackernews.org/) 
links similar to reddit submission flair.s

Post titles will be searched for common themes and appended to the line.
* Programming Languages 
* News Websites (NY Times, CNN, etc...)
* Frameworks 
* Questions/Opinions 
* Jobs
* ...

## || Documentation ||
The first iteration of this project will likely accomplish:

1. Successful parsing of CSS selectors to generate tags.
- [x] sitestr - to grab the source url.
- [ ]  rank  - to grab the post number/page.
- [ ] title - to grab/parse for recognizable words.
2. Successfully appending tags to existing div's
3. Accomplishing 1 and 2 on every new page.
4. Sorting posts based on tags.

(Note: XPath's may be used for this as well - but currently seem overkill since
the selectors already exist.  If we were searching for elements within the DOM
it may be useful to use XPaths)

Notes:

- If your contentscript.js file is not running (but is valid js) check your
  manifest.json file to see how/when your script is being ran (document_end).

