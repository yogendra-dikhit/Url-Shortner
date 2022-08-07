$(document).ready(function(){
	
	const validateUrl = () => {
		let url = $("#url").val();
		return url != null && url != undefined && url.trim().length >0 && url.length <= 150 && url.startsWith("https://");
	}
	
	$(document).on("input", "#url", function(){
		$(".error").text("");
	});
	
	$(document).on("click", "#btn-shorten", function(e){
		if (validateUrl()) {
			$('#btn-shorten span').hide();
			$('#btn-shorten small').show();

			$.ajax({
				url: "/api/urlShortner/shortenUrl",
				type: "POST",
				data: JSON.stringify({"url": $("#url").val()}),
				contentType: "application/json; charset=utf-8",
				success: function(data) {
					setTimeout(function() {
						$('#btn-shorten span').show();
						$('#btn-shorten small').hide();
					},1000);
				   	console.log("Save Complete: "+data);
				   	if (data !== "") {
						$("#shorten-url").val(data);
						$("#url").val("");
						toggleView();
					} else {
						$(".error").text("OOPS!! Error encountered, please try again.");
					}
				}
			});
		} else {
			$(".error").text("Invalid Url!!");
		}
		e.preventDefault();
	});
	
	const toggleView = () => {
		$("#url-box").slideToggle(200);
		$("#success-box").slideToggle(200);
	}
	
	$(document).on("click", "#btn-shorten-another", function(e){
		toggleView();
		$("#shorten-url").val("");
		$(".qr-container div").html("");
		$(".qr-container").slideToggle(100);
		e.preventDefault();
	});
	
	$(document).on("click", "#generate-qr", function(e){
		$('#generate-qr span').hide();
		$('#generate-qr small').show();
		let url = $("#shorten-url").val();
		let qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
      	$(".qr-container div").html(`<img src="${qr}" alt="QR Code"/>`);
      	setTimeout(function() {
			$('#generate-qr span').show();
			$('#generate-qr small').hide();
	      	$(".qr-container").slideToggle(200);
		},500);
		e.preventDefault();
	});
	
})