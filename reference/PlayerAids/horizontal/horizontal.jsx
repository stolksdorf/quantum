const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const Info = require('../info/info.jsx');
const Dice = require('../dice/dice.jsx');
const Zones = require('../zones/zones.jsx');

const Horizontal = createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='aid horizontal'>
			<Info />
			<Zones />
			<Dice />
		</div>
	}
});

module.exports = Horizontal;
