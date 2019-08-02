    (function () {

	    function GetQueryString(name)
		{
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			var url=window.location.search.substr(1);
			var r = url.match(reg);
			return r ? decodeURIComponent(r[2]) : null;
		}
		var invitecode = GetQueryString("msi")||GetQueryString("mi") || GetQueryString("invitecode");
		var evenClick=false;

	    var ua = navigator.userAgent.toLowerCase();
	    if(ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad"){
	        $(".copy_btn_android").hide();
	        $(".copy_btn_ios").show();
	        var clipboard = new Clipboard(".copy_btn_ios");
	        clipboard.on("success", function(e){
				$(".copy_btn_ios").html("复制成功");
				$(".m-fixed-tips").show();
				setTimeout(function(){
					$(".m-fixed-tips").hide();
				},1500);
				e.clearSelection();
				evenClick=true;
	        });
	        clipboard.on("error", function (e) {
	            $(".copy_btn_ios").html("复制失败");
	            alert("可能由于手机浏览器的版本问题，您并不能进行复制，请手动长按复制");
				evenClick=true;
	        });
	    }else{
	        $(".copy_btn_android").show();
	        $(".copy_btn_ios").hide();
	        var clipboard = new Clipboard(".copy_btn_android");
	        clipboard.on("success", function(e){
	            $(".copy_btn_android").html("复制成功");
				e.clearSelection();
				$(".m-fixed-tips").show();
				setTimeout(function(){
					$(".m-fixed-tips").hide();
				},1500);
				evenClick=true;
	        });
	        clipboard.on("error", function (e) {
	            $(".copy_btn_android").html("复制失败");
	            alert("可能由于手机浏览器的版本问题，您并不能进行复制，请手动长按复制");
				evenClick=true;
	        });
	    }
	    
		if(invitecode){
			$("#copytext").html(invitecode);
			$("#copy_key_android").html(invitecode);
			$("#copys-input").html(invitecode);
		}else{
			$("#copytext").html(tkl_text);
			$("#copy_key_android").html(tkl_text);
			$("#copys-input").html(tkl_text);
		}
		
		$(".m-down").attr('data-clipboard-text', invitecode);
		var clipboard2 = new Clipboard(".m-down");
		clipboard2.on('success', function (e) {
			$(".m-fixed-tips2").html('复制邀请码成功').show();
			e.clearSelection();
		});
		clipboard2.on('error', function (e) {
			alert("可能由于手机浏览器的版本问题，您并不能进行复制，请手动长按复制");
			e.clearSelection();
		});

		var uA = navigator.userAgent;
		var android ="https://android.myapp.com/myapp/detail.htm?apkName=com.mcsoft.zmjx";
		
		var isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
		$(".m-down").click(function(){
			// if(!evenClick){
			// 	evenClick=true;
			// 	$(".m-fixed-tips2").show();
			// 	setTimeout(function(){
			// 		$(".m-fixed-tips2").hide();
			// 	},1500);
			// }else{
				
			// }
			setTimeout(function(){
				location.href=android;
			},1500);
		
		
		});
	})();