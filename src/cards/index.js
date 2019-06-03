const yaml = require('js-yaml');
const fse = require('fs-extra');

// load in and segment out all the cards

const load = (...paths)=>{
	return paths.flatMap((path)=>{
		const contents = fse.readFileSync(`./cards/${path}`, 'utf8');
		return yaml.safeLoad(contents);
	});
}

module.exports = {
	tactics : load('tactics.new.yaml', 'tactics.revised.yaml'),
	skills  : load('skills.new.yaml', 'skills.revised.yaml')
}

