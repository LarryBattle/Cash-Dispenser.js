/**
* @author Larry Battle <bateru.com/news>
* @date April 11, 2012
* @purpose  Currency program.
*/
var cashToChange = function( curr, amount ){
  var obj = {}, i = 0;
	if(!(!isNaN( amount ) && 0 < amount && curr && typeof( curr ) === 'object' && curr.length)){
		return null;
	}
	curr = curr.sort(function(a,b){
		return +a > +b;
	});
	if( curr[0] < 1 ){
		return null;
	}
	i = curr.length;
	while( i-- && 0 < amount ){
		if( amount < curr[i] ){
			continue;
		}
		obj[ curr[ i ] ] = Math.floor( amount / curr[ i ] );
		amount %= curr[ i ];
	}
	if(0 < amount){
		obj.remaining = amount;
	}
	return obj;
};
