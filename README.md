# HnTagger

A Chrome plugin to add tags to [Hacker News](http://news.ycombinator.com/) 
links similar to reddit submission flairs.  

Ideally this plugin will assist users in quickly selecting a relevant post to
spend their time reading by categorizing useful posts.

Post titles will be searched for common categories and appended to the row.
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
- [x] rank  - to grab the correct post number per page.
- [x] title - to grab/parse for recognizable words.
2. Successfully appending tags to existing div's
3. Accomplishing 1 and 2 on every new page.
4. Sorting posts based on tags - Also ignoring posts based on their source.

Instead of following the above we chose to style the existing element rather
than appending our own - and just fousing on appending releveant tags.

(Note: XPath's may be used for this as well - but currently seem overkill since
the selectors already exist.  If we were searching for elements within the DOM
it may be useful to use XPaths)



Notes:

- If your contentscript.js file is not running (but is valid js) check your
  manifest.json file to see how/when your script is being run (document_end).
  
