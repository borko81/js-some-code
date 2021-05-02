$(function () {
	$("#hide").click(function (){
		$("div").hide()
	}),

	$("#show").click(function () {
		$("div").show()
	})

	$("#toggle").click(function () {
		$("div").fadeToggle(1000)
	})
});

$("#color").click(function () {
	let color = $("#in_color").val()
	$("div").css("background", color)
	$("div").prependTo("#color".val())
});

$("div").prepend("<b>Begin </b>")
$("div").append("<b>Bye </b>")