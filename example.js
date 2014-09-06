var esprima = require('esprima'),
    estraverse = require('estraverse'),
    fs = require('fs');
var file = process.argv[2];
var ast = esprima.parse(String(fs.readFileSync(file)));
estraverse.traverse(ast, {
  leave: function (node, parent) {
    if (node.type === 'CallExpression')
      console.log(node.callee.object.name.toUpperCase());
  }
});

