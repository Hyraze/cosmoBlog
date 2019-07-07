🎩 gatsby-remark-abbr
======

Add abbreviation syntax support to Gatsby.

With this plugin, you'll be able to write in your Markdown pages:

```markdown
The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```

And it'll be converted to:

```html
<p>
  The <abbr title="Hyper Text Markup Language">HTML</abbr> specification
  is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
</p>
```


## Installation

1. Add the package to your project:
  - With `yarn`:
    ```shell
    yarn add gatsby-remark-abbr
    ```
  - With `npm`:
    ```shell
    npm install gatsby-remark-abbr
    ```

2. Add those few lines into your `gatsby-config.js`:
  ```diff
      module.exports = {
        plugins: [
          {
            resolve: 'gatsby-transformer-remark',
            options: {
  +           plugins: [
  +             'gatsby-remark-abbr',
  +           ],
            },
          },
      };
  ```

3. Delete `.cache/` and reboot `gatsby`
4. You can now enjoy markdown abbreviation syntax 🎉


## Todo

Currently, [some code] is duplicated between [remark-abbr] and this plugin. I haven't figured it out yet how to do avoid this. Any help will be greatly apreciated 😅


## License

It's a wrapper around [remark-abbr] plugin, which is under MIT license.

[some code]: src/index.js#L4-L57
[remark-abbr]: https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-abbr
