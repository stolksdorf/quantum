require('./cards.less');
const React = require('react');

const SkillFrame = require('../Assets/command_edge.png');
const TacticFrame = require('../Assets/gambit_edge.png');

const Art = require('../Assets/Art');


//const Skills = require('./New_Skills.yaml');



// const Cards = [].concat(
// 	require('./New_Skills.yaml'),
// 	require('./New_Tactics.yaml')
// );


const Cards = require('./skills.new.yaml')


function CardRenderer({ ...props }){
	return <div className={`Cards`} {...props}>

		{Cards.map((card)=>{

			const art = Art[card.art] || {};


			return <div className={`card ${card.type}`} key={card.name}>
				<div className='content'>
					<h1>{card.name}</h1>
					<h3>{card.desc}</h3>
					<p>{card.text}</p>
				</div>
				<img
					className='art'
					src={art.path}
					style={{
						top: art.top,
						left:art.left,
						width:art.width
					}}
				/>
				<img className='frame' src={card.type=='skill' ? SkillFrame : TacticFrame} />

				<div className='fade' />

			</div>


		})}
	</div>;
};

module.exports = CardRenderer;