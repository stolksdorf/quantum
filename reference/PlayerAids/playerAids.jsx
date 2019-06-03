require('./playerAids.less');
const React = require('react');


function PlayerAids({ ...props }){
	return <div className={`PlayerAids`} {...props}>
		PlayerAids Component Ready.
	</div>;
};

module.exports = PlayerAids;