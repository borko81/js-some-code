$(function () {
	$("fieldset input").css("background", "blue")
	$("form input").css("color", "yellow")
	$("form >> input").css("border", "1px solid red")
	$("tr:first").css("background", "silver")
	$("tr:last").css("background", "cyan")
	$("tr:even").css("color", 'red')
	$("tr:eq(1)").css("color", "green")
	$("h2").css("text-transform", "uppercase")
	$(".myid").css("color", "pink")

	$("a").attr({"href": "https://unrealsoft.net", "title": "yellow"})

	$("#b_red").click(function () {
		$("h2").css({"color": "red", "text-decoration": "underline"})
	})

	$("#b_blue").click(function () {
		$("h2").css(
			{
				"color": "blue",
				"text-decoration": "underline",
			}
		),
		$("#h_tag").html("<i>New Text</i>")
		let t = $("#f1").val()
		if (t) {
			alert(t)	
		}
	})
})