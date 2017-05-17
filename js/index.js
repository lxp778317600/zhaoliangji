$(".clo").click(function (){
				$(this).parent().parent().animate({
					"width":"0px",
					"opacity":".5"
				},1000)
          })
$(document).mousemove(function (e){
      var x=e.pageX;
	var y=e.pageY;
	console.log(x+":"+y);
})