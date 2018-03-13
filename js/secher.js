$(function(){

   //重置容器高宽
	var width = window.innerWidth+'px';
	var height = $("#mychar2").height();
	$("#mychar2").css("width", width).css("height", height);
   // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('mychar2'));
	var option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }   
	    },
	    toolbox: {
	        show : true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data: ['运维处理', '月度趋势图','月度完成率']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            boundaryGap: [0, 0.1]
	        }
	    ],
	    series : [
	        {
	            name:'Acutal',
	            type:'bar',
	            stack: 'sum',
	            itemStyle: {
	                normal: {
	                    color: 'tomato',
	                    barBorderColor: 'tomato',
	                    barBorderWidth: 6,
	                    barBorderRadius:0,
	                    label : {
	                        show: true, position: 'insideTop'
	                    }
	                }
	            },
	            data:[260,120,80]
	        },
	        {
	            name:'Forecast',
	            type:'bar',
	            stack: 'sum',
	            itemStyle: {
	                normal: {
	                    color: '#fff',
	                    barBorderColor: 'tomato',
	                    barBorderWidth: 6,
	                    barBorderRadius:0,
	                    label : {
	                        show: true, 
	                        position: 'top',
	                        textStyle: {
	                            color: 'tomato'
	                        }
	                    }
	                }
	            },
	            data:[40, 80, 50]
	        }
	    ]
	};
	myChart.setOption(option);
	
})
