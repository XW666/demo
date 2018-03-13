$(function(){
   //重置容器高宽
	var width = window.innerWidth+'px';
	var height = $("#mychar3").height();
	$("#mychar3").css("width", width).css("height", height);
	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('mychar3'));
	var option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: '{a} <br/>{b} : {c}'
	    },
	    legend: {
	        left: 'left',
	        data: ['运维处理', '月度趋势图','月度完成率']
	    },
	    xAxis: {
	        type: 'category',
	        name: 'x',
	        splitLine: {show: false},
	        data: ['一', '二', '三', '四', '五']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis: {
	        type: 'log',
	        name: 'y'
	    },
	    series: [
	        {
	            name: '运维处理',
	            type: 'line',
	            data: [1, 3, 9, 27, 81]
	        },
	        {
	            name: '月度趋势图',
	            type: 'line',
	            data: [1, 2, 4, 8, 16]
	        },
	        {
	            name: '月度完成率',
	            type: 'line',
	            data: [1/2, 1/4, 1/8, 1/16, 1/32]
	        }
	    ]
	};

	myChart.setOption(option);
	
})
