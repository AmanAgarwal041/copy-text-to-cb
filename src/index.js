import React from 'react';
import PropTypes from 'prop-types';
import { noop, emptyComp, copyText } from './helpers/util';
import { defaultPopStyle } from './helpers/default-pop-style';

class CopyText extends React.Component {
	constructor() {
		super();
		this.state = {
			copying: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev) {
		const { cb, text } = this.props;
		const cbFn = () => {
			this.setState(() => ({ copying: true }));
			setTimeout(() => this.setState(() => ({ copying: false })), 2000);
			cb(ev);
		};
		copyText(text, cbFn);
	}

	render() {
		const { component: Component, popStyle, pop, classes } = this.props;
		const style = Object.assign(
			{
				opacity: `${this.state.copying ? '0.75' : '0'}`,
			}, 
			defaultPopStyle, 
			popStyle,
		);

		return (
			<div style={{ position: 'relative' }} className={classes}>
				{ pop ? <span style={style}>Copied!</span> : null }
				<Component onClick={this.handleClick}/>
			</div>
		);
	}
}

CopyText.propTypes = {
	text: PropTypes.string.isRequired,
	classes: PropTypes.string,
	component: PropTypes.func,
	cb: PropTypes.func,
	pop: PropTypes.bool,
	popStyle: PropTypes.object,
};

CopyText.defaultProps = {
	classes: '',
	component: emptyComp,
	cb: noop,
	pop: true,
	popStyle: {},
};

export default CopyText;