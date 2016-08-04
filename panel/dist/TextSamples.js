let React = require('react')
let Component = React.Component

class TextSamples extends Component {

  constructor() {
    super()

    this.state = {}
  }

  static get defaultProps() {
    return {}
  }

  render() {
    let btn_style = { width: 200 }
    let small_style = { width: 100 }

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Standard"), 
          React.createElement("div", {className: "group g-01"}, 
            React.createElement("ui-button", null, "Click")
          ), 

          React.createElement("div", {className: "group g-02"}, 
            React.createElement("ui-button", {disabled: true}, "Click"), 
            React.createElement("ui-button", {id: "focus", className: "mini blue"}, "Focus")
          ), 

          React.createElement("span", {id: "event"}, "event: ---")
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "State"), 
          React.createElement("div", {style: {position: "relative"}}, 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "red", pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "green", pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "blue", pressed: true}, "Pressed")
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "red", focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "green", focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "blue", focused: true}, "Focused")
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "red", disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "green", disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "blue", disabled: true}, "Disabled")
            ), 
            React.createElement("div", {className: "fit"})
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Unnavigable"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {unnavigable: true}, "OK"), 
            React.createElement("ui-button", {unnavigable: true}, "Cancel")
          )
        ), 

        React.createElement("div", {className: "section", style: {display: "none"}}, 
          React.createElement("h3", null, "Animated (TODO)"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "animated"}, 
              React.createElement("div", {className: "visible"}, "Build"), 
              React.createElement("div", {className: "hidden"}, "Go")
            )
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Size"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "mini"}, "Mini"), 
            React.createElement("ui-button", {className: "tiny"}, "Tiny"), 
            React.createElement("ui-button", {className: "small"}, "Small"), 
            React.createElement("ui-button", {className: "medium"}, "Medium"), 
            React.createElement("ui-button", {className: "large"}, "Large"), 
            React.createElement("ui-button", {className: "big"}, "Big"), 
            React.createElement("ui-button", {className: "huge"}, "Huge"), 
            React.createElement("ui-button", {className: "massive"}, "Massive")
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "mini"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "tiny"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "small"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "medium"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "large"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "big"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "huge"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "massive"}, React.createElement("i", {className: "icon-ok"}))
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Colored"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {style: small_style}, "Default"), 
            React.createElement("ui-button", {style: small_style, className: "red"}, "Red"), 
            React.createElement("ui-button", {style: small_style, className: "green"}, "Green"), 
            React.createElement("ui-button", {style: small_style, className: "blue"}, "Blue")
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Transparent"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "transparent"}, "Default"), 
            React.createElement("ui-button", {className: "red transparent"}, "Red"), 
            React.createElement("ui-button", {className: "green transparent"}, "Green"), 
            React.createElement("ui-button", {className: "blue transparent"}, "Blue")
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Transparent State"), 
          React.createElement("div", {style: {position: "relative"}}, 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, className: "transparent", pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "transparent red", pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "transparent green", pressed: true}, "Pressed"), 
              React.createElement("ui-button", {style: small_style, className: "transparent blue", pressed: true}, "Pressed")
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, className: "transparent", focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "transparent red", focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "transparent green", focused: true}, "Focused"), 
              React.createElement("ui-button", {style: small_style, className: "transparent blue", focused: true}, "Focused")
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-button", {style: small_style, className: "transparent", disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "transparent red", disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "transparent green", disabled: true}, "Disabled"), 
              React.createElement("ui-button", {style: small_style, className: "transparent blue", disabled: true}, "Disabled")
            ), 
            React.createElement("div", {className: "fit"})
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Transparent Icon"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "transparent"}, React.createElement("i", {className: "icon-eye"})), 
            React.createElement("ui-button", {className: "red transparent"}, React.createElement("i", {className: "icon-cancel"})), 
            React.createElement("ui-button", {className: "green transparent"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "blue transparent"}, React.createElement("i", {className: "icon-cw"}))
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Transparent Size"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "transparent mini"}, "Mini"), 
            React.createElement("ui-button", {className: "transparent tiny"}, "Tiny"), 
            React.createElement("ui-button", {className: "transparent small"}, "Small"), 
            React.createElement("ui-button", {className: "transparent medium"}, "Medium"), 
            React.createElement("ui-button", {className: "transparent large"}, "Large"), 
            React.createElement("ui-button", {className: "transparent big"}, "Big"), 
            React.createElement("ui-button", {className: "transparent huge"}, "Huge"), 
            React.createElement("ui-button", {className: "transparent massive"}, "Massive")
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-button", {className: "transparent mini"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent tiny"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent small"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent medium"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent large"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent big"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent huge"}, React.createElement("i", {className: "icon-ok"})), 
            React.createElement("ui-button", {className: "transparent massive"}, React.createElement("i", {className: "icon-ok"}))
          )
        ), 


        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Standard"), 
          React.createElement("div", {className: "group g-01"}, 
            React.createElement("ui-text-area", {placeholder: "Enter your text..."}), 
            React.createElement("span", {className: "text"})
          ), 

          React.createElement("div", {className: "group g-02"}, 
            React.createElement("ui-text-area", {value: "Hello World", placeholder: "Search..."}), 
            React.createElement("span", {className: "text"})
          ), 

          React.createElement("div", {className: "group g-03"}, 
            React.createElement("ui-text-area", {value: "Disabled", placeholder: "Search...", disabled: true}), 
            React.createElement("span", {className: "text"}), 
            React.createElement("ui-button", {id: "focus", className: "mini blue"}, "Focus")
          ), 

          React.createElement("span", {id: "event"}, "event: ---")
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "State"), 
          React.createElement("div", {style: {position: "relative"}}, 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-text-area", {style: btn_style, placeholder: "Normal..."}), 
              React.createElement("ui-text-area", {style: btn_style, value: "Normal"})
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-text-area", {style: btn_style, placeholder: "Focused...", focused: true}), 
              React.createElement("ui-text-area", {style: btn_style, value: "Focused", focused: true})
            ), 
            React.createElement("div", {className: "group"}, 
              React.createElement("ui-text-area", {style: btn_style, placeholder: "Disabled...", disabled: true}), 
              React.createElement("ui-text-area", {style: btn_style, value: "Disabled", disabled: true})
            ), 
            React.createElement("div", {className: "fit"})
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Size"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "mini", placeholder: "Mini..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "mini", value: "Mini"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "tiny", placeholder: "Tiny..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "tiny", value: "Tiny"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "small", placeholder: "Small..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "small", value: "Small"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "medium", placeholder: "Medium..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "medium", value: "Medium"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "large", placeholder: "Large..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "large", value: "Large"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "big", placeholder: "Big..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "big", value: "Big"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "huge", placeholder: "Huge..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "huge", value: "Huge"})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {style: btn_style, className: "massive", placeholder: "Massive..."}), 
            React.createElement("ui-text-area", {style: btn_style, className: "massive", value: "Massive"})
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Readonly"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {placeholder: "Readonly...", readonly: true}), 
            React.createElement("ui-text-area", {placeholder: "Readonly...", value: "Hello World", readonly: true})
          )
        ), 

        React.createElement("div", {className: "section"}, 
          React.createElement("h3", null, "Unnavigable"), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {placeholder: "Enter your text...", unnavigable: true}), 
            React.createElement("ui-text-area", {placeholder: "Enter your text...", value: "Hello World", unnavigable: true})
          ), 
          React.createElement("div", {className: "group"}, 
            React.createElement("ui-text-area", {placeholder: "Enter your text...", unnavigable: true, disabled: true}), 
            React.createElement("ui-text-area", {placeholder: "Enter your text...", value: "Hello World", unnavigable: true, disabled: true})
          )
        )
      )
    )
  }
}

module.exports = TextSamples
