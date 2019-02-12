'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./helpers/util');

var _defaultPopStyle = require('./helpers/default-pop-style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyText = function (_React$Component) {
	_inherits(CopyText, _React$Component);

	function CopyText() {
		_classCallCheck(this, CopyText);

		var _this = _possibleConstructorReturn(this, (CopyText.__proto__ || Object.getPrototypeOf(CopyText)).call(this));

		_this.state = {
			copying: false
		};
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(CopyText, [{
		key: 'handleClick',
		value: function handleClick(ev) {
			var _this2 = this;

			var _props = this.props,
			    cb = _props.cb,
			    text = _props.text;

			var cbFn = function cbFn() {
				_this2.setState(function () {
					return { copying: true };
				});
				setTimeout(function () {
					return _this2.setState(function () {
						return { copying: false };
					});
				}, 2000);
				cb(ev);
			};
			(0, _util.copyText)(text, cbFn);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    Component = _props2.component,
			    popStyle = _props2.popStyle,
			    pop = _props2.pop;

			var style = Object.assign({
				opacity: '' + (this.state.copying ? '0.75' : '0')
			}, _defaultPopStyle.defaultPopStyle, popStyle);

			return _react2.default.createElement(
				'div',
				{ style: { position: 'relative' } },
				pop ? _react2.default.createElement(
					'span',
					{ style: style },
					'Copied!'
				) : null,
				_react2.default.createElement(Component, { onClick: this.handleClick })
			);
		}
	}]);

	return CopyText;
}(_react2.default.Component);

CopyText.propTypes = {
	text: _propTypes2.default.string.isRequired,
	component: _propTypes2.default.func,
	cb: _propTypes2.default.func,
	pop: _propTypes2.default.bool,
	popStyle: _propTypes2.default.object
};

CopyText.defaultProps = {
	component: _util.emptyComp,
	cb: _util.noop,
	pop: true,
	popStyle: {}
};

exports.default = CopyText;