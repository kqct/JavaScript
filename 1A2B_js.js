//This is my 1A2B program, created on 2/9/2014 by Josh.

function randomNG(digits){
//The variable digits should be in between 3 and 5, inclusive.
	if(digits === 3){
		a = Math.floor(Math.random() * 10);
		b = Math.floor(Math.random() * 10);
		if(b === a){
			b = Math.floor(Math.random() * 10);
		};
		c = Math.floor(Math.random() * 10);
		if(c === a){
			c = Math.floor(Math.random() * 10);
		else if(c === b)
			c = Math.floor(Math.random() * 10);
	};
//	if(digits === 4){
//		randomNG(3);
//	}		
};

return(randomNG(3));