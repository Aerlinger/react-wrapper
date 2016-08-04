let TextSamples = require('./TextSamples')

module.export = function link(dom_node) {
  render(
    React.createElement(TextSamples, null),

    dom_node
  )
}

