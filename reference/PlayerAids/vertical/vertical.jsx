const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const Info = require('../info/info.jsx');
const Dice = require('../dice/dice.jsx');
const Zones = require('../zones/zones.jsx');

const Vertical = createClass({
	getDefaultProps: function() {
		return {
q
		};
	},
	render: function(){
		return <div className='aid vertical'>
			<Info />
			<Zones />
			<Dice />
		</div>
	}
});

module.exports = Vertical;
