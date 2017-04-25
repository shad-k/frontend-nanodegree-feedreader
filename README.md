# Feed Reader Testing
This project is a part of Udacity's Front End Web Developer Nano Degree. In this project we are given
a feed reader application that lacks tests to ensure the current functionality doesn't fail
when more features are added.

## How to run
To run the project download the project files or clone the repo and then open index.html in a
browser.

### Tests that will fail
There is just one test that is new and will currently fail. The test is to check is whether all the entries contain
summaries. The implementation to make the test work is to change the property name in the handlebar
template "tpl-entry" in HTML (index.html) from {{contentSnippet}} to {{summary}}.