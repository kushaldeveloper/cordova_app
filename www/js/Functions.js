document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
	      cordova.plugins.barcodeScanner.scan(
	      function (result) {
          alert("Barcode found\n" +
                "Access" + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
     	},
      function (error) {
          alert("you need to download barcodescanner" + error);
      }
      );
  
    

	}
