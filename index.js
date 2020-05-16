const jsonFile = require('jsonfile');
const FILE_PATH = './data.json';
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const commit = number => {
	if(number==0) return simpleGit().push();
	const week = random.int(0,54);
	const day = random.int(0,6);
	const DATE = moment().subtract(1,'y').add(1,'d').add(week,'w').add(day,'d').format();

const data = {
	date: DATE
}

jsonFile.writeFile(FILE_PATH, data, ()=>{
	simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
	commit.bind(this,--number));
});
}
commit(100);