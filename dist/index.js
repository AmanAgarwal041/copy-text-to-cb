"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_util=require("./helpers/util"),_defaultPopStyle=require("./helpers/default-pop-style");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!_instanceof(e,t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var CopyText=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).state={copying:!1},e.handleClick=e.handleClick.bind(_assertThisInitialized(_assertThisInitialized(e))),e}return _inherits(t,_react.default.Component),_createClass(t,[{key:"handleClick",value:function(e){var t=this,o=this.props,r=o.cb,n=o.text;(0,_util.copyText)(n,function(){t.setState(function(){return{copying:!0}}),setTimeout(function(){return t.setState(function(){return{copying:!1}})},2e3),r(e)})}},{key:"render",value:function(){var e=this.props,t=e.component,o=e.popStyle,r=e.pop,n=e.classes,i=Object.assign({opacity:"".concat(this.state.copying?"0.75":"0")},_defaultPopStyle.defaultPopStyle,o);return _react.default.createElement("div",{style:{position:"relative"},className:n},r?_react.default.createElement("span",{style:i},"Copied!"):null,_react.default.createElement(t,{onClick:this.handleClick}))}}]),t}();CopyText.propTypes={text:_propTypes.default.string.isRequired,classes:_propTypes.default.string,component:_propTypes.default.func,cb:_propTypes.default.func,pop:_propTypes.default.bool,popStyle:_propTypes.default.object},CopyText.defaultProps={classes:"",component:_util.emptyComp,cb:_util.noop,pop:!0,popStyle:{}};var _default=CopyText;exports.default=_default;