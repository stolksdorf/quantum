const map = (obj,fn)=>Object.keys(obj).map((key)=>fn(obj[key],key));
const cluster = (obj, fn)=>Object.keys(obj).reduce((a,k)=>{const r=fn(obj[k],k);if(!a[r]){a[r]=[]};a[r].push(obj[k]);return a;},{});
const sort = (arr, fn)=>arr.sort((a,b)=>{
	const x = fn(a), y = fn(b);
	return x < y ? -1 : x > y ? 1 : 0;
});

const fse = require('fs-extra');

const Cards = require('../cards');

const Template = fse.readFileSync('./scripts/cardReadme.template.md', 'utf8');

let Readme = Template;





const group = (cards)=>{
	return cluster(cards, (card)=>{
		if(card.status == 'unchanged' || card.status == 'revised'){
			return 'revised';
		}
		if(card.status == 'removed') return 'removed';
		return 'new'
	})
}

const renderGroup = (cards)=>{
	const renderCard = (card)=>{
		let text = [];
		text.push(`**${card.name}**: ${card.text || card.original} <br/>`);

		if(card.status) text.push(`> _status: ${card.status}_ <br/>`);
		if(card.text && card.original) text.push(`> [original]: ${card.original} <br/>`);
		if(card.notes) text.push(`> ${card.notes}`);

		return text.join('\n')
	}

	//console.log(cards);
	//console.log('---------');
	//console.log(sort(cards, (card)=>card.name));

	if(!cards) return '';

	return cards.sort((card)=>card.name).map(renderCard).join('\n\n');
};


const Skills = group(Cards.skills);

Readme = Readme.replace('{{skills.new}}', renderGroup(Skills.new));
Readme = Readme.replace('{{skills.revised}}', renderGroup(Skills.revised));
Readme = Readme.replace('{{skills.removed}}', renderGroup(Skills.removed));




const Tactics = group(Cards.tactics);

Readme = Readme.replace('{{tactics.new}}', renderGroup(Tactics.new));
Readme = Readme.replace('{{tactics.revised}}', renderGroup(Tactics.revised));
Readme = Readme.replace('{{tactics.removed}}', renderGroup(Tactics.removed));








fse.writeFileSync('../Cards.md', Readme);
console.log('Updated `Cards.md`!');