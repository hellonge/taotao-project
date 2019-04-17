import Vue from 'vue';
//过滤器/管道  比如字符不合法之类的各种过滤结果
Vue.filter('bigCase', function (val) {
  return val+'10098';
});
Vue.filter('dateFmt', function(time) {
    //console.log("time",time);
   var formatDate = function (time,format='YY-MM-DD hh:mm:ss'){
     if(time){
       var date = new Date(parseInt(time));
       var year = date.getFullYear(),
         month = date.getMonth()+1,//月份是从0开始的
         day = date.getDate(),
         hour = date.getHours(),
         min = date.getMinutes(),
         sec = date.getSeconds();
       var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
         return '0'+index;
       });//开个长度为10的数组 格式为 00 01 02 03

       var monthArray = new Array();
       monthArray[1] = "Jan"; monthArray[2] = "Feb"; monthArray[3] = "Mar"; monthArray[4] = "Apr"; monthArray[5] = "May"; monthArray[6] = "Jan";
       monthArray[7] = "Jul"; monthArray[8] = "Aug"; monthArray[9] = "Sep"; monthArray[10] = "Oct"; monthArray[11] = "Nov"; monthArray[12] = "Dec";

       var newTime = format.replace(/YY/g,year)
       //.replace(/MM/g,preArr[month]||month)
         .replace(/MM/g,month).replace(/DD/g,preArr[day]||day)
         .replace(/hh/g,preArr[hour]||hour).replace(/mm/g,preArr[min]||min).replace(/ss/g,preArr[sec]||sec);
       return newTime;
     }else{
       return '';
     }
   }
   var date = new Date(parseInt(time));
   var year = date.getFullYear(), month = date.getMonth()+1, day = date.getDate();
	 var today = new Date();
	 var curDay = today.getDate(), curMonth = today.getMonth()+1, curYear = today.getFullYear();
        return formatDate(time,'YY-MM-DD hh:mm:ss');
	// if(day == curDay && month == curMonth && year == curYear){
	// 	return formatDate(time,'hh:mm');
	// } else if(year == curYear){
	// 	return formatDate(time,'DD MM');
	// } else {
	// 	return formatDate(time,'DD MM YY');
	// }
});
Vue.filter('dateFmtYMD', function(time) {
  if(time){
    var date = new Date(parseInt(time));
    var year = date.getFullYear(),
      month = date.getMonth()+1,
      day = date.getDate();
    month=month<10?'0'+month:month;
    day=day<10?'0'+day:day;
    return year+'-'+month+'-'+day;
  }else{
    return '';
  }

});
