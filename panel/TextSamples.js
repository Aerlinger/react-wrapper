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
      <div>
        <div className="section">
          <h3>Standard</h3>
          <div className="group g-01">
            <ui-button>Click</ui-button>
          </div>

          <div className="group g-02">
            <ui-button disabled>Click</ui-button>
            <ui-button id="focus" className="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div className="section">
          <h3>State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-button style={small_style} pressed>Pressed</ui-button>
              <ui-button style={small_style} className="red" pressed>Pressed</ui-button>
              <ui-button style={small_style} className="green" pressed>Pressed</ui-button>
              <ui-button style={small_style} className="blue" pressed>Pressed</ui-button>
            </div>
            <div className="group">
              <ui-button style={small_style} focused>Focused</ui-button>
              <ui-button style={small_style} className="red" focused>Focused</ui-button>
              <ui-button style={small_style} className="green" focused>Focused</ui-button>
              <ui-button style={small_style} className="blue" focused>Focused</ui-button>
            </div>
            <div className="group">
              <ui-button style={small_style} disabled>Disabled</ui-button>
              <ui-button style={small_style} className="red" disabled>Disabled</ui-button>
              <ui-button style={small_style} className="green" disabled>Disabled</ui-button>
              <ui-button style={small_style} className="blue" disabled>Disabled</ui-button>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Unnavigable</h3>
          <div className="group">
            <ui-button unnavigable>OK</ui-button>
            <ui-button unnavigable>Cancel</ui-button>
          </div>
        </div>

        <div className="section" style={{display: "none"}}>
          <h3>Animated (TODO)</h3>
          <div className="group">
            <ui-button className="animated">
              <div className="visible">Build</div>
              <div className="hidden">Go</div>
            </ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Size</h3>
          <div className="group">
            <ui-button className="mini">Mini</ui-button>
            <ui-button className="tiny">Tiny</ui-button>
            <ui-button className="small">Small</ui-button>
            <ui-button className="medium">Medium</ui-button>
            <ui-button className="large">Large</ui-button>
            <ui-button className="big">Big</ui-button>
            <ui-button className="huge">Huge</ui-button>
            <ui-button className="massive">Massive</ui-button>
          </div>
          <div className="group">
            <ui-button className="mini"><i className="icon-ok"></i></ui-button>
            <ui-button className="tiny"><i className="icon-ok"></i></ui-button>
            <ui-button className="small"><i className="icon-ok"></i></ui-button>
            <ui-button className="medium"><i className="icon-ok"></i></ui-button>
            <ui-button className="large"><i className="icon-ok"></i></ui-button>
            <ui-button className="big"><i className="icon-ok"></i></ui-button>
            <ui-button className="huge"><i className="icon-ok"></i></ui-button>
            <ui-button className="massive"><i className="icon-ok"></i></ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Colored</h3>
          <div className="group">
            <ui-button style={small_style}>Default</ui-button>
            <ui-button style={small_style} className="red">Red</ui-button>
            <ui-button style={small_style} className="green">Green</ui-button>
            <ui-button style={small_style} className="blue">Blue</ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent</h3>
          <div className="group">
            <ui-button className="transparent">Default</ui-button>
            <ui-button className="red transparent">Red</ui-button>
            <ui-button className="green transparent">Green</ui-button>
            <ui-button className="blue transparent">Blue</ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-button style={small_style} className="transparent" pressed>Pressed</ui-button>
              <ui-button style={small_style} className="transparent red" pressed>Pressed</ui-button>
              <ui-button style={small_style} className="transparent green" pressed>Pressed</ui-button>
              <ui-button style={small_style} className="transparent blue" pressed>Pressed</ui-button>
            </div>
            <div className="group">
              <ui-button style={small_style} className="transparent" focused>Focused</ui-button>
              <ui-button style={small_style} className="transparent red" focused>Focused</ui-button>
              <ui-button style={small_style} className="transparent green" focused>Focused</ui-button>
              <ui-button style={small_style} className="transparent blue" focused>Focused</ui-button>
            </div>
            <div className="group">
              <ui-button style={small_style} className="transparent" disabled>Disabled</ui-button>
              <ui-button style={small_style} className="transparent red" disabled>Disabled</ui-button>
              <ui-button style={small_style} className="transparent green" disabled>Disabled</ui-button>
              <ui-button style={small_style} className="transparent blue" disabled>Disabled</ui-button>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Transparent Icon</h3>
          <div className="group">
            <ui-button className="transparent"><i className="icon-eye"></i></ui-button>
            <ui-button className="red transparent"><i className="icon-cancel"></i></ui-button>
            <ui-button className="green transparent"><i className="icon-ok"></i></ui-button>
            <ui-button className="blue transparent"><i className="icon-cw"></i></ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent Size</h3>
          <div className="group">
            <ui-button className="transparent mini">Mini</ui-button>
            <ui-button className="transparent tiny">Tiny</ui-button>
            <ui-button className="transparent small">Small</ui-button>
            <ui-button className="transparent medium">Medium</ui-button>
            <ui-button className="transparent large">Large</ui-button>
            <ui-button className="transparent big">Big</ui-button>
            <ui-button className="transparent huge">Huge</ui-button>
            <ui-button className="transparent massive">Massive</ui-button>
          </div>
          <div className="group">
            <ui-button className="transparent mini"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent tiny"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent small"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent medium"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent large"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent big"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent huge"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent massive"><i className="icon-ok"></i></ui-button>
          </div>
        </div>


        <div className="section">
          <h3>Standard</h3>
          <div className="group g-01">
            <ui-text-area placeholder="Enter your text..."></ui-text-area>
            <span className="text"></span>
          </div>

          <div className="group g-02">
            <ui-text-area value="Hello World" placeholder="Search..."></ui-text-area>
            <span className="text"></span>
          </div>

          <div className="group g-03">
            <ui-text-area value="Disabled" placeholder="Search..." disabled></ui-text-area>
            <span className="text"></span>
            <ui-button id="focus" className="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div className="section">
          <h3>State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Normal..."></ui-text-area>
              <ui-text-area style={btn_style} value="Normal"></ui-text-area>
            </div>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Focused..." focused></ui-text-area>
              <ui-text-area style={btn_style} value="Focused" focused></ui-text-area>
            </div>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Disabled..." disabled></ui-text-area>
              <ui-text-area style={btn_style} value="Disabled" disabled></ui-text-area>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Size</h3>
          <div className="group">
            <ui-text-area style={btn_style} className="mini" placeholder="Mini..."></ui-text-area>
            <ui-text-area style={btn_style} className="mini" value="Mini"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="tiny" placeholder="Tiny..."></ui-text-area>
            <ui-text-area style={btn_style} className="tiny" value="Tiny"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="small" placeholder="Small..."></ui-text-area>
            <ui-text-area style={btn_style} className="small" value="Small"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="medium" placeholder="Medium..."></ui-text-area>
            <ui-text-area style={btn_style} className="medium" value="Medium"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="large" placeholder="Large..."></ui-text-area>
            <ui-text-area style={btn_style} className="large" value="Large"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="big" placeholder="Big..."></ui-text-area>
            <ui-text-area style={btn_style} className="big" value="Big"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="huge" placeholder="Huge..."></ui-text-area>
            <ui-text-area style={btn_style} className="huge" value="Huge"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="massive" placeholder="Massive..."></ui-text-area>
            <ui-text-area style={btn_style} className="massive" value="Massive"></ui-text-area>
          </div>
        </div>

        <div className="section">
          <h3>Readonly</h3>
          <div className="group">
            <ui-text-area placeholder="Readonly..." readonly></ui-text-area>
            <ui-text-area placeholder="Readonly..." value="Hello World" readonly></ui-text-area>
          </div>
        </div>

        <div className="section">
          <h3>Unnavigable</h3>
          <div className="group">
            <ui-text-area placeholder="Enter your text..." unnavigable></ui-text-area>
            <ui-text-area placeholder="Enter your text..." value="Hello World" unnavigable></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area placeholder="Enter your text..." unnavigable disabled></ui-text-area>
            <ui-text-area placeholder="Enter your text..." value="Hello World" unnavigable disabled></ui-text-area>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TextSamples
