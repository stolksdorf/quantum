const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const Zones = createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='zones'>
			<div className='scrapyard border'><h4>scrapyard</h4>

			</div>
			<div className='conquer border'><h4>conquer</h4>

			</div>
			<div className='reserve border'><h4>reserve</h4>

			</div>
		</div>
	}
});

module.exports = Zones;
