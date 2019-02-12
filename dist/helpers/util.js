'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.copyText = exports.emptyComp = exports.noop = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var emptyComp = function emptyComp(props) {
	return _react2.default.createElement(
		'button',
		_extends({ type: 'button' }, props),
		'Copy'
	);
};

function copyText(text, cb) {
	var temp = document.createElement('textarea');
	temp.style.zIndex = '-999999';
	temp.style.position = 'absolute';
	temp.style.left = '-100%';
	temp.style.top = '-100%';
	document.body.append(temp);

	temp.value = text;
	temp.select();

	try {
		document.execCommand('copy');
		cb();
	} catch (err) {
		console.log(err);
	}
	temp.remove();
}

exports.noop = noop;
exports.emptyComp = emptyComp;
exports.copyText = copyText;