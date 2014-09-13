$("body").mouseenter(function () {
	$("#desc").animate({
	backgroundPositionX:"+=100px", 
    backgroundPositionZ:"+=200px"
	});
});
$("body").mouseleave(function () {
	$("#desc").animate({
	backgroundPositionX:"0px", 
    backgroundPositionZ:"0px"
    });
});