<%@ page isELIgnored="false"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="css/styles.css">
	<title>Url Shortner</title>
</head>
<body>
	<div class="container">
		<div class="form-center">
			<div class="form-container ">
				<form action="">
					<div id="url-box" class="">
						<div class="row row-8">
							<div class="form-group col col-12">
								<div class="input-field">
									<label for="url">Url</label>
									<div class="field">
										<input type="text" name="url" id="url" class="form-control" placeholder="https://">
									</div>
									<label class="error"></label>
								</div>
							</div>
						</div>
						<div class="row row-8">
							<div class="form-group col col-12">
								<div class="input-field">
									<a id="btn-shorten" href="javascript:void(0);" class="btn btn-shorten">
										<span>Shorten Url</span>
										<small>
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
											<circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="6" r="21" stroke-dasharray="98.96016858807849 34.98672286269283">
											  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.0204081632653061s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
											</circle>
											</svg>
										</small>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="success-box" class="">
						<div class="row row-8">
							<div class="form-group col col-12">
								<div class="input-field">
									<label for="shorten-url">Short Url</label>
									<div class="field">
										<input type="text" name="shorten-url" id="shorten-url" class="form-control" disabled="disabled">
									</div>
								</div>
							</div>
						</div>
						<div class="next-buttons row row-8">
							<div class="col col-6">
								<div class="input-field">
									<a id="btn-shorten-another" href="javascript:void(0);" class="btn btn-shorten">
										<span>Shorten Another</span>
									</a>
								</div>
							</div>
							<div class="col col-6">
								<div class="input-field">
									<a id="generate-qr" href="javascript:void(0);" class="btn btn-shorten">
										<span>Generate QR Code</span>
										<small>
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
											<circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="6" r="21" stroke-dasharray="98.96016858807849 34.98672286269283">
											  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.0204081632653061s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
											</circle>
											</svg>
										</small>
									</a>
								</div>
							</div>						
						</div>
						<div class="qr-container row">
							<div class="col-8"></div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
<script src="scripts/jquery-3.3.1.min.js"></script>
<script src="scripts/index.js"></script>
</body>
</html>