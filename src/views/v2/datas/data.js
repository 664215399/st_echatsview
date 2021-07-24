import echarts from 'echarts'
export const equipmentNum = [{
  label: '设备总数',
  count: 10001
},
{
  label: '季度新增',
  count: 200
},
{
  label: '运营设备',
  count: 23233
},
{
  label: '异常设备',
  count: 4290
}
]
export const typeList = [{
  title: '故障设备监控',
  type: 0
},
{
  title: '异常设备监控',
  type: 1
}
]
export const monitor = [{
  type: 0,
  list: [{
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '北京市昌平区',
    code: Math.ceil(Math.random() * 1000000)
  }
  ]
},
{
  type: 1,
  list: [{
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州珲春市',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州延吉',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州图们市',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州敦化市',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州蛟河市',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州汪清市',
    code: Math.ceil(Math.random() * 1000000)
  },
  {
    time: Date.parse(new Date()),
    address: '吉林省延边朝鲜自治州龙井市',
    code: Math.ceil(Math.random() * 1000000)
  }
  ]
}
]
export const chinaSpecies = {
  title: '分布饼状图',
  option: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // 注意颜色写的位置
    color: [
      '#006cff',
      '#60cda0',
      '#ed8884',
      '#ff9f7f',
      '#0096ff',
      '#9fe6b8',
      '#32c5e9',
      '#1d9dff'
    ],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        // 如果radius是百分比则必须加引号
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 8
        }
      }
    ]
  },
  dom: 'chinaSpecies',
  tooltip: [{ title: '点位总数', count: 320111 }, { title: '本月新增', count: 513 }]
}
var item = {
  name: '',
  value: 1200,
  // 1. 修改当前柱形的样式
  itemStyle: {
    color: '#254065'
  },
  // 2. 鼠标放到柱子上不想高亮显示
  emphasis: {
    itemStyle: {
      color: '#254065'
    }
  },
  // 3. 鼠标经过柱子不显示提示框组件
  tooltip: {
    extraCssText: 'opacity: 0'
  }
}
export const ChinaUser = {
  title: '分布柱状图',
  option: {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: '#00fffb' }, // 0 起始颜色
        { offset: 1, color: '#0061ce' } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '3%',
      top: '3%',
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      // grid 四条边框的颜色
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '上海',
          '广州',
          '北京',
          '深圳',
          '合肥',
          '',
          '......',
          '',
          '杭州',
          '厦门',
          '济南',
          '成都',
          '重庆'
        ],
        axisTick: {
          alignWithLabel: false,
          // 把x轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: '#4c9bfd'
        },
        // x轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
            // width: 3
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          alignWithLabel: false,
          // 把y轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: '#4c9bfd'
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240
        ]
      }
    ]
  },
  dom: 'ChinaUser',
  tooltip: [{ title: '用户总量', count: 130766 }, { title: '本月新增', count: 343 }]
}

export const sell = {
  title: '销售渠道',
  option: {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ['60%', '10%']
    },
    radar: {
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '地铁站', max: 100 },
        { name: '电商', max: 100 }
      ],
      // 修改雷达图的大小
      radius: '65%',
      shape: 'circle',
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色
        textStyle: {
          color: '#4c9bfd'
        }
      },
      // 分割的圆圈线条的样式
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255, 0.5)'
        }
      },
      splitArea: {
        show: false
      },
      // 坐标轴的线修改为白色半透明
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [
      {
        name: '销售渠道占比',
        type: 'radar',
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: '#fff',
            width: 1,
            opacity: 0.5
          }
        },
        data: [[90, 19, 56, 11, 34]],
        // 设置图形标记 （拐点）
        symbol: 'circle',
        // 这个是设置小圆点大小
        symbolSize: 5,
        // 设置小圆点颜色
        itemStyle: {
          color: '#fff'
        },
        // 让小圆点显示数据
        label: {
          show: true,
          fontSize: 10
        },
        // 修饰我们区域填充的背景颜色
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)'
        }
      }
    ]
  },
  dom: 'sell'
}
export const quarter = {
  dom: 'flow',
  title: '流量监控',
  option: {
    title: {
      text: (0.45 * 100).toFixed(0) + '{a|%}',
      textStyle: {
        fontSize: 30,
        fontFamily: 'Microsoft Yahei',
        fontWeight: 'normal',
        color: '#bcb8fb',
        rich: {
          a: {
            fontSize: 20
          }
        }
      },
      x: 'center',
      y: '35%'
    },
    graphic: [{
      type: 'group',
      left: 'center',
      top: '60%',
      children: [{
        type: 'text',
        z: 100,
        left: '10',
        top: 'middle',
        style: {
          fill: '#aab2fa',
          text: '流量统计',
          font: '18px Microsoft YaHei'
        }
      }]
    }],
    series: [{
      type: 'liquidFill',
      radius: '80%',
      center: ['50%', '50%'],
      //  shape: 'roundRect',
      data: [0.5, 0.3, 0.4],
      backgroundStyle: {
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0.5,
          y2: 1,
          colorStops: [{
            offset: 1,
            color: 'rgba(0, 104, 255, 0)'
          }, {
            offset: 0.5,
            color: 'rgba(0, 104, 255, .25)'
          }, {
            offset: 0,
            color: 'rgba(0, 104, 255, 1)'
          }],
          globalCoord: false
        }
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 20,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(0, 104, 255, 0)'
            }, {
              offset: 0.5,
              color: 'rgba(0, 104, 255, .25)'
            }, {
              offset: 1,
              color: 'rgba(0, 104, 255, 1)'
            }],
            globalCoord: false
          },
          shadowBlur: 10,
          shadowColor: '#000'
        }
      },

      label: {
        normal: {
          formatter: ''
        }
      }
    }]
  }
}

export const worldcloud = {
  title: 'World-Cloud',
  dom: 'worldcloud',
  option: {
    tooltip: {
      show: true
    },
    series: [{
      type: 'wordCloud',
      gridSize: 1,
      sizeRange: [12, 55],
      rotationRange: [-45, 0, 45, 90],
      textStyle: {
        normal: {
          color: function () {
            return '#ffffff'
          }
        }
      },
      left: 'center',
      top: 0,
      bottom: 0,
      data: [
        {
          name: 'Sam S Club',
          value: 10000
        }, {
          name: 'Macys',
          value: 6181
        }, {
          name: 'Amy Schumer',
          value: 4386
        }, {
          name: 'Jurassic World',
          value: 4055
        }, {
          name: 'Charter Communications',
          value: 2467
        }, {
          name: 'Chick Fil A',
          value: 2244
        }, {
          name: 'Planet Fitness',
          value: 1898
        }, {
          name: 'Pitch Perfect',
          value: 1484
        }, {
          name: 'Express',
          value: 1112
        }, {
          name: 'Home',
          value: 965
        }, {
          name: 'Johnny Depp',
          value: 847
        }, {
          name: 'Lena Dunham',
          value: 582
        }, {
          name: 'Lewis Hamilton',
          value: 555
        }, {
          name: 'KXAN',
          value: 550
        }, {
          name: 'Mary Ellen Mark',
          value: 462
        }, {
          name: 'Farrah Abraham',
          value: 366
        }, {
          name: 'Su Tu',
          value: 1999
        }, {
          name: 'Rita Ora',
          value: 360
        }, {
          name: 'Serena Williams',
          value: 282
        }, {
          name: 'NCAA baseball tournament',
          value: 273
        }, {
          name: 'Point',
          value: 273
        }, {
          name: 'Hello Wold',
          value: 1298
        },
        {
          name: 'Hello Javascript',
          value: 865
        },
        {
          name: 'Vue.js',
          value: 1265
        },
        {
          name: 'Linux',
          value: 2265
        }]
    }]
  }
}
var img2 = require('@/assets/images/v2/paopao2.png')
var wordLength = (value) => {
  var ret = '' // 拼接加\n返回的类目项
  var maxLength = 4 // 每项显示文字个数
  var valLength = value.length // X轴类目项的文字个数
  var rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
  if (rowN > 1) {
    for (var i = 0; i < rowN; i++) {
      var temp = '' // 每次截取的字符串
      var start = i * maxLength // 开始截取的位置
      var end = start + maxLength // 结束截取的位置
      // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
      temp = value.substring(start, end) + '\n'
      ret += temp // 凭借最终的字符串
    }
    return ret
  } else {
    return value
  }
}
//
var data = [{
  name: '北京',
  value: '12355'
},
{
  name: '上海',
  value: '12093'
},
{
  name: '成都',
  value: '8874'
},
{
  name: '重庆',
  value: '7427'
},
{
  name: '广州',
  value: '4308'
},
{
  name: '延边',
  value: '4308'
}, {
  name: '哈尔滨',
  value: '4308'
}

]
// 偏移量
var offsetData = [
  [80, 53],
  [35, 73],
  [30, 33],
  [60, 43],
  [20, 48],
  [1, 78],
  [100, 48],
  [10, 28]
]
// symbolSize 散点气泡大小
var symbolSizeData = [100, 100, 100, 100, 100, 100, 100, 100]
//
// 循环定义series的data值
var datas = []
for (var i = 0; i < data.length; i++) {
  const item = data[i]
  // var itemToStyle = datalist[i];

  datas.push({
    name: wordLength(item.name) + '\n' + item.value + '人',
    value: offsetData[i],
    symbolSize: symbolSizeData[i],
    label: {
      normal: {
        textStyle: {
          fontSize: 14
        }
      }
    },
    itemStyle: {
      normal: {
        color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
          offset: 0,
          color: 'rgba(31,102,162,0)'
        },
        {
          offset: 1,
          color: 'rgba(31,102,192,0.6)'
        }
        ]),
        opacity: 0.8,
        shadowColor: '#2e78eca8',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
      }

    }
  })
}
export const paopao = {
  title: '分布气泡图',
  dom: 'paopao',
  option: {
    grid: {
      show: false,
      top: 10,
      bottom: 10
    },
    xAxis: [{
      gridIndex: 0,
      type: 'value',
      show: false,
      min: 0,
      max: 100,
      nameLocation: 'middle',
      nameGap: 5
    }],
    yAxis: [{
      gridIndex: 0,
      min: 0,
      show: false,
      max: 100,
      nameLocation: 'middle',
      nameGap: 30
    }],

    series: [{
      type: 'scatter',
      symbol: 'circle',
      symbolSize: 120,
      label: {
        normal: {
          show: true,
          formatter: '{b}',
          color: '#fff',
          textStyle: {
            fontSize: '20'
          }
        }
      },
      animationDurationUpdate: 1000,
      animationEasingUpdate: 1000,
      animationDelay: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100
      },
      itemStyle: {
        normal: {
          color: '#00acea'
        }
      },
      data: datas
    }],
    graphic: [
      {
        type: 'image',
        id: 'logo',
        left: '45%',
        bottom: '30%',
        z: -10,
        bounding: 'raw',
        origin: [675, 5],
        //  position: [100, 0], // 平移，默认值为 [0, 0]。
        style: {
          image: img2,
          width: 120,
          height: 120,
          opacity: 0.4
        }
      },
      {
        type: 'image',
        id: 'logo1',
        right: '14%',
        bottom: '0',
        z: -10,
        bounding: 'raw',
        origin: [275, 5],
        style: {
          image: img2,
          width: 80,
          height: 80,
          opacity: 0.4
        }
      },
      {
        type: 'image',
        id: 'logo2',
        left: '10%',
        bottom: '2%',
        z: -10,
        bounding: 'raw',
        origin: [875, 15],
        style: {
          image: img2,
          width: 60,
          height: 60,
          opacity: 0.4
        }
      }, {
        type: 'image',
        id: 'logo3',
        left: '36%',
        bottom: 0,
        z: -10,
        bounding: 'raw',
        origin: [975, 5],
        style: {
          image: img2,
          width: 40,
          height: 40,
          opacity: 0.4
        }
      },
      {
        type: 'image',
        id: 'logo4',
        left: '32%',
        bottom: '10%',
        z: -10,
        bounding: 'raw',
        origin: [76, 76],
        style: {
          image: img2,
          width: 50,
          height: 50,
          opacity: 0.4
        }
      },
      {
        type: 'image',
        id: 'logo5',
        left: '40%',
        bottom: '35%',
        z: -10,
        bounding: 'raw',
        origin: [76, 76],
        style: {
          image: img2,
          width: 90,
          height: 90,
          opacity: 0.4
        }
      }
    ]
  }
}
