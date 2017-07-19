function test(str){
	var arr = [];
	var ar=[];
	for(var i=0;i<str.length;i++){
		arr[i] = str.charAt(i);
}
	for(var j=0;j<arr.length;j++){
		ar[j]= arr[j];
}
	arr.reverse();
	ar.join("") === arr.join("")?console.log("yes"):console.log("not");	
}



function a(x){	
x= x.toString();
    var arr = [];
	var ar=[];
	for(var i=0;i<x.length;i++){
		arr[i] = x.charAt(i);
}
	for(var j=0;j<arr.length;j++){
		ar[j]= arr[j];
}
	arr.reverse();
	if(ar.join("") === arr.join("")){
		return true;
} else {
		return false;
}
}


//实现输出两个由一个字符串前缀和后缀组成的数组
function f(x){
	var be = af = [];
	var bestr = afstr = "";
	var count =0;
	for(var i =0;i<x.length-1;i++){
		bestr += x.charAt(i);
		be.push(bestr);
}
	for(var j=1;j<x.length;j++){
		afstr += x.charAt(j);
		af.push(afstr);
	}

}



//这个函数实现输出一个数组包含这两个数组中相同的元素
function test(x,y){
	var arra =[];
	for(var i=0;i<x.length;i++){
		for(var j=0;j<y.length;j++){
			if(x[i]===y[j]){
				arra.push(x[i]);
}
}
}
	for(var m=0;m<arra.length;m++){
		for(var n=1;n<arra.length;n++){
			if(arra[m] ===arra[n]){
				arra.splice(n,1);
			}
}
}
console.log(arra);
}