'use strict';

import React from 'react';
import {Dimensions,PixelRatio} from 'react-native';

const Util = {
	// 高德地图KEY
	amapKey:'27ae631fc6f9f2105c7f9f135f325772',
	// 周边搜索服务
	searchURL:'http://restapi.amap.com/v3/place/around?',
	detailURL:'http://restapi.amap.com/v3/place/detail?',
	// 单位像素
	pixel: 1/ PixelRatio.get(),
	// 屏幕尺寸
	size:{
		width:Dimensions.get('window').width,
		height:Dimensions.get('window').height
	},
	// POST 方法
	post:(url,data,callback)=>{
		let fetchOptions = {
			method: 'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		};
		fetch(url,fetchOptions)
			.then(response => response.text())
			.then(responseText => {
				callback(JSON.parse(responseText));
			});
	},
	// GET 方法
	get:(url,callback)=>{
		fetch(url)
			.then(response => response.text())
			.then(responseText =>{
				callback(JSON.parse(responseText));
			});
	}
}
module.exports = Util;


