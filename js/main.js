require.config({
	//路径
	baseUrl: 'js',
	//别名
	paths: {
		jquery: 'jquery.min',
		shuye: 'super',
		Roy: 'shuye'
	}
});


//调用模块
require(['jquery'], function($) {
	$('.wrapper').html('<font color=red>OhMyGod</font>');
});

//调用模块
require(['shuye'], function(su) {
	su.method1();
});

