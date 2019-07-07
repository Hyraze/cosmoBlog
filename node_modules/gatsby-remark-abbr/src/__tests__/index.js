const Remark = require('remark');
const dedent = require('dedent');

const plugin = require('../index');

describe('remark abbr plugin', () => {
  it('renders abbr nodes properly', () => {
    const markdownText = dedent`
      This plugin works on MDAST, a Markdown AST
      implemented by [remark](https://github.com/wooorm/remark)

      *[MDAST]: Markdown Abstract Syntax Tree.
      *[AST]: Abstract syntax tree
    `;

    const markdownAST = plugin
      .setParserPlugins()
      .reduce((remark, plugin) => remark.use(plugin), new Remark())
      .parse(markdownText);

    plugin({ markdownAST });

    expect(markdownAST).toMatchSnapshot();
  });
});
