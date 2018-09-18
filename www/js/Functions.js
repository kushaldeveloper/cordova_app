document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
	cordova.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
    );	
    function scanBarCode(){
		alert('barcode scanner is starting');
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
    }  
					   

	}
