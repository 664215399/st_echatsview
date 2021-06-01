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
  title: '点位分布图',
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
  title: '点位分布图',
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
  title: '渠道分布',
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
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
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
        name: '北京',
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
  title: '季度销售进度',
  option: {
    title: {
      text: '50%',
      left: 'center',
      top: '50%',
      textStyle: {
        fontSize: 30,
        color: '#ffffff'
      }
    },
    series: [
      {
        name: '销售进度',
        type: 'pie',
        radius: ['130%', '150%'],
        // 移动下位置  套住50%文字
        center: ['48%', '80%'],
        // 是否启用防止标签重叠策略
        // avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        // 饼形图的起始角度为 180， 注意不是旋转角度
        startAngle: 180,
        // 鼠标经过不需要放大偏移图形
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: '#00c9e0' }, // 0 起始颜色
                  { offset: 1, color: '#005fc1' } // 1 结束颜色
                ]
              )
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#12274d'
            }
          },
          {
            value: 200,
            itemStyle: {
              color: 'transparent'
            }
          }
        ]
      }
    ]
  },
  position: 'bottom',
  dom: 'quarter',
  tooltip: [{ title: '销售额(万)', count: 1993 }, { title: '同比增长', count: 150 }]
}
