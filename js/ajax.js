function ajax(options) { //options:对象 
        function objtostring(obj) { //将对象转换成字符串的方法
            var arr = [];
            for (var i in obj) {
                arr.push(i + '=' + obj[i]);

            }
            return arr.join('&')
        }
        //默认值
        //判断请求方式：默认get
        options.type = options.type || 'get';
        //判断数据是否存在:默认为空
        options.data = options.data || '';


        //判断数据是否是对象，而不是数组。
        if (typeof options.data == 'object' && typeof options.data.length != 'number') {
            options.data = objtostring(options.data);
        } else if (typeof options.data == 'string') { //判断数据是否是字符串。
            options.data = options.data;
        } else { //抛出错误
            throw new Error('仅支持字符串和对象');
        }

        //判断接口地址是否存在
        if (options.url && options.url != '') { //不存在undefined和值不能为空
            options.url = options.url
        } else {
            throw new Error('接口地址不存在或者为空');
        }

        //判断是否异步
        if (options.async == false) {
            options.async = false;
        } else {
            options.async = true;
        }
        //判断数据是否存在，同时将数据拼接在地址栏的后面。
        if (options.type == 'get' && options.data) {
            options.url += '?' + options.data;
        }
        var ajax = null;
        try {
            ajax = new XMLHttpRequest();
        } catch (e) {
            ajax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        ajax.open(options.type, options.url, options.async);
        //判断那种方式传输数据
        if (options.type == 'post' && options.data) {
            ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            ajax.send(options.data);
        } else {
            ajax.send();
        }
        //是否同步异步
        if (options.async == false) {//同步
            options.success && options.success(ajax.responseText);
        } else {//异步
            ajax.onreadystatechange = function() {
                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        options.success && options.success(ajax.responseText);
                    } else {
                        options.error && options.error('接口地址错误：' + ajax.status);
                    }
                }
            }
        }
    }