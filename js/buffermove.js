 function getstyle(obj, attr) {
     if (obj.currentStyle) {
         return obj.currentStyle[attr];
     } else {
         return getComputedStyle(obj)[attr];
     }
 }

 function bufferMove(obj, json, fn) {
     clearInterval(obj.timer); 
     obj.timer = setInterval(function() {
         var bstop = true; 
         for (var attr in json) {
             var cur = null;
             if (attr == 'opacity') {
                 cur = Math.round(getstyle(obj, attr) * 100);
             } else {
                 cur = parseInt(getstyle(obj, attr));
             }
             //求速度
             var speed = (json[attr] - cur) / 5;
             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

             if (cur != json[attr]) {
                 if (attr == 'opacity') {
                     obj.style.opacity = (cur + speed) / 100;
                     obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
                 } else {
                     obj.style[attr] = cur + speed + 'px';
                 }
                 bstop = false;
             }
         }
         if (bstop) {
             clearInterval(obj.timer);
             fn && fn();
         }
     }, 5);
 }
