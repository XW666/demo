$(function(){
		// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'));
    var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        bottom: 10,
	        left: 'center',
	        data: ['运维处理', '月度趋势图','月度完成率']
	    },
	    series : [
	        {
	            type: 'pie',
	            radius : '65%',
	            center: ['50%', '50%'],
	            selectedMode: 'single',
	            data:[
	                {
	                    value:1548,
	                    name: '运维处理'   
	                },
	                {value:535, name: '月度趋势图'},
	                {value:510, name: '月度完成率'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
 myChart.setOption(option);
})
