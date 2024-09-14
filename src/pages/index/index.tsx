import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  //字符串
  let a='第一个变量'

  //数组
  const arr=['abc','cba','nba']

  //对象
  const obj={
    name:"张三",
    age:18
  }

  let isTure=true;
  let isUndefinde=undefined;
  function fn(){
    return "我是函数的返回值"
  }
  let className1
  return (
    <>
    <View >
      <Text>{a}</Text>
    </View>
    <view><Text>{arr}</Text></view>
    <view>{obj.name}-{obj.age}</view>
    <view>{JSON.stringify(obj)}</view>
    <view>{new Date().getTime()}</view>
    <view>{isTure}</view>
    <view>{isUndefinde}</view>
    <view>{1+2}</view>
    <view>
    {
      isTure?'我是真的':'我是假的'
    }
    </view>
    <view>{fn()}</view>
    <View>--------------------------------------------------------</View>
    <View className='box' id='id1'>class</View>
    <View className={className1}>动态class类名</View>
    <View className={`${className1}`}></View>
    </>
  )
}
