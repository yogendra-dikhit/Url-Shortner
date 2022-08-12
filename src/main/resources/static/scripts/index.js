$(document).ready(function(){
	var urlList = [];
	
	const addObjectToHistory = () => {
		let url = $("#url").val();
		urlList.push({
			"url":url,
			"shortenUrl": shortenUrl
		});
		addUrlToHistory({url,shortenUrl});
		window.localStorage.setItem("urlList", JSON.stringify(urlList));
		if($(".collapsible").length == 1)
			$(".list-container").css("visibility", "visible");
	}
	
	const addUrlToHistory = (obj) => {
		let newRow = `<button class="collapsible">${obj.url}</button>
					<div class="content">
						<p>${obj.shortenUrl}</p>
					</div>`;
		$("#historyList").append(newRow);		
	}
	
	if (window && window.localStorage) {
		let list = window.localStorage.getItem("urlList");
		console.log(list);
		if (list) {
			urlList = JSON.parse(list);
			urlList.forEach(addUrlToHistory);
		}
	}
	
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
				   	if (data !== "") {
						shortenUrl = data;
						$("#shorten-url").val(data);
						addObjectToHistory();
						$("#url").val("");
						$(".qr-container").hide();
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
	
	var shortenUrl = $("#shorten-url").val();
	$(document).on("click", "#generate-qr", function(e){
		if($(".qr-container").is(":visible"))
			return;
		$('#generate-qr span').hide();
		$('#generate-qr small').show();

		var container = $(".qr-container div");
	  	container.empty();
	  	var qrcode = new QRCode(container.get(0), {
	    	text: shortenUrl,
	    	width: 200,
	    	height: 200,
	  	});
	  	container.find("img").attr("alt", shortenUrl);
	  	container.show();
      	setTimeout(function() {
			$('#generate-qr span').show();
			$('#generate-qr small').hide();
	      	$(".qr-container").slideToggle(200);
		},500);
		
		e.preventDefault();
	});
	
	function select_text() {
  		$("#shorten-url").focus().select();
	}
	$("#shorten-url").click(select_text);
	$("#shorten-url").change(function () {
  		$(this).val(shortenUrl);
	});
	
	var clipboard = new Clipboard("#btn-copy");
	clipboard.on("success", function (e) {
  		e.clearSelection();
  		$("#btn-copy").addClass("active");
  		setTimeout(function() {$("#btn-copy").removeClass("active");},500);
	});
	
	$(document).on("click", ".collapsible", function(e){
		$(this).toggleClass("active");
		$(this).next().slideToggle(100)
		e.preventDefault();
	})
	
	if($(".collapsible").length > 0)
		$(".list-container").css("visibility", "visible");
})