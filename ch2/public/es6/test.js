'use strict';

const sentences = [
	{ subject: 'javascript', verb: 'is', object: 'great' },
	{ subject: 'elephants', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }){
	console.log(`${subject} ${verb} ${object}`);
}

for( let s of sentences){
	say(s);
}
