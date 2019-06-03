const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const Dice = createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='dice'>
			<div className='ships border'>
				<h4>Ship abilities</h4>
				<div className='die battlestar'>
					<h5>Strike</h5>
					<p>One free attack.</p>
				</div>
				<div className='die flagship'>
					<h5>Transport</h5>
					<p>Pick up 1 of your ships from a surrounding space. Carry as you move (not attack) and drop it in an empty surrounding space.</p>
				</div>
				<div className='die destroyer'>
					<h5>Warp</h5>
					<p>Swap places with one of your ships and this one.</p>
				</div>
				<div className='die frigate'>
					<h5>Modify</h5>
					<p>Change to a 3 or a 5.</p>
				</div>
				<div className='die interceptor'>
					<h5>Maneuver</h5>
					<p>Travel diagonally as you Move/Attack you.</p>
				</div>
				<div className='die scout'>
					<h5>Transform</h5>
					<p>Recongifure as a free action.</p>
				</div>
			</div>
		</div>
	}
});

module.exports = Dice;
