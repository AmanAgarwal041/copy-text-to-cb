import React from 'react';

function noop() {}

const emptyComp = props => <button type="button" {...props}>Copy</button>;

function copyText(text, cb) {
	const temp = document.createElement('textarea');
	temp.style.zIndex =  '-999999';
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

export {
	noop,
	emptyComp,
	copyText,
};
