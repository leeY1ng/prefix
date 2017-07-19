function f(x){
	//生产两个数组保存字符串的前缀和后缀
	var be = af = [];
	var bestr = afstr = "";
	for(var i =0;i<x.length-1;i++){
		bestr += x.charAt(i);
		be.push(bestr);
}
	for(var j=1;j<x.length;j++){
		var afstr = x.substr(j,x.length-j);
		af.push(afstr);
	}

	//对比两个数组，将相同的元素导入一个数组保存
	var arra =[];
	for(var q=0;q<be.length;q++){
		for(var p=0;p<af.length;p++){
			if(be[q]===af[p]){
				arra.push(be[q]);
}
}
}
	console.log(arra);
	//数组去重
	for(var m=0;m<arra.length;m++){
		for(var n=m+1;n<arra.length;n++){
			if(arra[m] ===arra[n]){
				arra.splice(n,1);
				n--;
			}
}
}
//console.log(arra);
}