'use strict';

let React       = Editor.require('packages://react-wrapper/node_modules/react')
let render      = Editor.require('packages://react-wrapper/node_modules/react-dom').render
let TextSamples = Editor.require('packages://react-wrapper/panel/dist/TextSamples.js')


Editor.Panel.extend({
  template: `
     <div class="toolbar">
      <ui-select id="select">
        <option value="button">ui-button</option>
        <option value="checkbox">ui-checkbox</option>
        <option value="color">ui-color</option>
        <option value="color-picker">ui-color-picker</option>
        <option value="hint">ui-hint</option>
        <option value="icon">icons</option>
        <option value="input">ui-input</option>
        <option value="loader">ui-loader</option>
        <option value="markdown">ui-markdown</option>
        <option value="num-input">ui-num-input</option>
        <option value="prop">ui-prop</option>
        <option value="section">ui-section</option>
        <option value="select">ui-select</option>
        <option value="slider">ui-slider</option>
        <option value="text-area">ui-text-area</option>
      </ui-select>
      <span>Ctrl/Cmd + F: show current focus</span>
    </div>
    <div id="view" class="scroll"></div>
    `,

  style: `
    :host {
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .toolbar {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 10px;
    }

    #view {
      flex: 1;

      padding: 10px;
      padding-top: 0px;

      overflow-y: auto;
      overflow-x: hidden;
    }

    div.section {
      border-bottom: 1px solid #666;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    div.section:last-child {
      border-bottom: 0px;
    }

    div.group {
      min-width: 420px;
      margin-bottom: 5px;

      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }

    span {
      margin-right: 0.25em;
    }

    .item {
      min-width: 100px;
      min-height: 100px;

      position: relative;

      margin-bottom: 10px;
      margin-right: 10px;
    }

    .placeholder {
      height: 20px;

      margin-bottom: 10px;
      margin-right: 10px;

      background-color: rgba( 0, 0, 0, 0.3 );
    }

    .placeholder.label {
      width: 100px;
    }

    .placeholder.line {
    }

    .placeholder.image {
      width: 100px;
      height: 100px;
    }
  `,


  $: {},

  listeners: {
    click (event) {
      event.stopPropagation()
      console.log('click!')
    },

    open() {
      console.log("Opened panel")
    },

    'panel-resize' (event) {
      console.log(event.target)
    },

    'panel-show' (event) {
      console.log("SHOW: ", event)
    },

    'panel-hide' (event) {
      console.log("HIDE: ", event)
    }
  },

  ready () {
    this.$ = {
      view: this.shadowRoot.querySelector('#view')
    }

    render(
      React.createElement(TextSamples),
      this.$.view
    )
  },

  run (argv) {
    console.log(`Pkg run with args: ${argv}`)
  },

  close() {
    console.log("Panel closed.")
  }
})
