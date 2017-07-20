var a = ["fasdf","fsdsfs","afsesdf","fasdfasd","sadfsf"];
function findLongPrefix(arr){
	var bearr =[],bestr ="",arrc;
	for(var i =0;i<arr[i].length;i++){
		bestr += arr[i].charAt(i);
		bearr.push(bestr);
	}
	var bestr ="";
}
	//分割数组
	for(var n=0;n<arr.length+1;n++){
		c.push(a.slice(n,n+1)[0]);
	}


function find(x){
	//所有元素前缀组成的数组
	var bestr="",bearr=[];
	for(var i =0;i<x.length;i++){
		for(var j=0;j<x[i].length-1;j++){
			bestr += x[i][j];
			bearr.push(bestr);
		}
		var bestr ='';
	}
	//数组排序
	function compare(c1,c2){
		return c1-c2;
	}
	//数组元素长度组成新数组
	var num =[],lastArr=[];
	for(var e = 0;e<bearr.length;e++){
		num.push(bearr[e].length);
	}
	//数组排序并返回前缀数组内长度最长的字符串
	num.sort(compare);
	var arrc =num[num.length-1];
	for(var q=0;q<bearr.length;q++){
		if(arrc === bearr[q].length){
			lastArr.push(bearr[q]);
		}
	}
	// for(var v=0;v<lastArr.length;v++){
	// 	if(!lastArr[v]){
	// 		lastArr[v] === "";
	// 	}
	// }
	return lastArr;
} 

//从数组中选出相同元素压入新数组
	var newArr = [],finalArr =[];
for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length-i;j++){
		if(arr[i]===arr[j]){
			//var finalArr= newArr.concat(newArr.push(arr.splice(j,1)));
			var finalArr = newArr.concat(arr.splice(j,1));
			j--;
		}
	}
	return finalArr;
}



function f(arr){ 
	var str;arra=[];
	for(var i=0;i<arr.length;i++){

		if(arra.indexOf(str)=== -1){
			arra.push(str);
		}
	}
}
var i =1;
var a = i+++--i-i+++--i+i+--i+i++-++i;