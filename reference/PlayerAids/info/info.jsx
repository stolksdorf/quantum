const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const Info = createClass({
	getDefaultProps: function() {
		return {

		};
	},
	render: function(){
		return <div className='info'>
			<div className='counters'>
				<div className='dominance'>
					<h3>dominance</h3>



				</div>
				<div className='research'>
					<h3>research</h3>

				</div>
			</div>
			<div className='phase1 border'>
				<h4>Phase 1</h4>
				<strong>Take 3 Actions</strong>
				<ul>
					<li>
						<i className='fa fa-circle-o' />
						Reconfigure
						<p>Reroll a ship. Keep rolling if you get the same number.</p>
					</li>
					<li>
						<i className='fa fa-circle-o' />
						Deploy
						<p>Place a ship from your scrapyard into an orbital position of a planet you've Conquered.</p>
					</li>
					<li>
						<i className='fa fa-circle-o' />
						Conquer <small>(2 actions)</small>
						<p>Place a Conquer Marker on a planet if your ship total in orbital positions sum to exactly the planet's number</p>
					</li>
					<li>
						<i className='fa fa-circle-o' />
						Move/Attack
						<p>Move a ship up to it's number. Attack by occupying the same space as an opponent's ship. A ship may only Move/attak once per turn.</p>
					</li>
					<li>
						<i className='fa fa-circle-o' />
						Research
						<p>Increase your Research die by 1.</p>
					</li>
				</ul>
			</div>

			<div className='arrow'><i className='fa fa-arrow-down' /></div>
			<div className='phase2 border'>
				<h4>Phase 2</h4>
				<strong>End of Turn</strong>
				<ul>
					<li>
						<i className='fa fa-circle-o' />
						If Dominance = 6; Set to 1, then Conquer any planet
					</li>
					<li>
						<i className='fa fa-circle-o' />
						If Research = 6; Set to 1, then take a card
					</li>
					<li>
						<i className='fa fa-circle-o' />
						Take a card for each planet Conquered this turn
					</li>
				</ul>
			</div>
		</div>
	}
});

module.exports = Info;
