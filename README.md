# Mr. Nobody

This is a website about an invented character called Mr Nobody. About the 
character, and as a summary, I wouldn't be able to say much. It's a rather widespead stereotype,
compared to decades or centuries ago.

The gate to the website is on index.html and the actual website files are under the __dist__ folder.


[Mr Nobody, Mindgate](https://misterybodon.github.io/web/ "The Website")



Pictures, text and code, for good or bad, are my own contribution.


## How to edit the code

Clone the project running 

```
git clone https://github.com/misterybodon/web
```

Run 
```npm i``` 
to install dev dependencies.

`npm run watcher` will start watching for any change in the `/source` directory.

`npm run server` will reload `/dist/index.html` when there is any modification in 
the distribution folder.

Both applications (gulp-cli and live-server are supposed to be globally installed).

For specific options on running the watcher (gulp) look into `gulpfile.js`

### Adding a post

1. Posts updates are semi-automatic. To create a new post create a folder named "postN" where N is replaced 
with the correspondent number. If the last one is "post2", just create the folder "post3." 
2. To set up the blog post, the easiest way is to copy "template" folder content into the new directory.
3. Next an entry should be created in the "posts" objects under the source/js folder, following simple rules.
4. Now the "New Posts" will be updated in all the files, with the corresponding new entry.

