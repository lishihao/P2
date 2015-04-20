function isArmstrong(num) {
	var sum = 0;
	vnum = String(num);

	for(var i = 0; i<vnum.length; i++) {
		sum = sum + Math.pow(Number(vnum[i]), vnum.length);
	}
	


    if(sum == num)
    {
        return true;
    }
    else
    {
       return false;
    }
}

var allArmstrongs=function() {
	var result = '';
	
	for(var k = 1; k<= 99999; ++k) {

	if(isArmstrong(k)){
	result = result + k + ' ';
}}
    return result;
}



var allSubstrings1=function(mystring){
	var result = '';
	
	for(i=0 ; i<=mystring.length ; i++){
		for(j=i+1 ; j<=mystring.length ; j++){
			result = result + mystring.substring(i,j) + ',' 

		}

	}
return result;
}




var allSubstrings2=function(mystring){
	
	var array = [];

	
	for(i=0;i<=mystring.length;i++){
		for(j=i+1;j<=mystring.length;j++){
        var x= mystring.substring(i,j);
        array.push(x)
		}

	}
return array;
}


function maxWord(x) {
    var str = x.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}