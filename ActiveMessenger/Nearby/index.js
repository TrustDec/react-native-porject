'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  StatusBar,
  Platform
} from 'react-native';

// 是否开启真是的定位？如果开启_GEO_OPEN,则_GEO_TEST_POS会失效
const _GEO_OPEN = true;
// 模拟定位数据
const _GEO_TEST_POS = '121.390686,31.213976';
//高亮
if (Platform.OS==='ios') {
	StatusBar.networkActivityIndicatorVisible(true);
}

export default class Nearby extends Component {
	constructor(porps){
		super(porps);
		this.state={
			selected:'美食'
		}
	}
	render(){
		return(
			<View style={style.container}>
				<Text>Index.js</Text>
			</View>
		);
	}
}
const style = StyleSheet.create({
	container:{
		flex:1
	}
});
