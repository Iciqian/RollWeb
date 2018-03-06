
//rem布局设置meta标签 (开始)
		(function(doc, win) {
	    var docEle = doc.documentElement,
	    dpr = 1
	     scale = 1 / dpr,
	    resizeEvent = 'orientationchange' in window ? 'orientationchange': 'resize';
	    docEle.dataset.dpr = dpr;
	    var metaEle = doc.createElement('meta');
	    metaEle.name = 'viewport';
	    metaEle.content = 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no';
	    docEle.firstElementChild.appendChild(metaEle);
	    var recalCulate = function() {
	        var width = docEle.clientWidth;

	        if (width / dpr > 640) {
	            width = 640 * dpr;
	        }

	        docEle.style.fontSize = 20 * (width / 320) + 'px';
	    };
	    recalCulate();
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvent, recalCulate, false);
	})(document, window);
//设置meta标签（结束）
