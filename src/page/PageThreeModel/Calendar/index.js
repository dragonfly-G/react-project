import React, { Component } from 'react'

import './index.scss'

export default class Calendar extends Component {

    render() {

        var year = 2018;
        var month = 6; //是人类的月份，从1开始的
        // 三要素
        // 本月第一天是星期几
        var benyuediyitianxingqiji = new Date(year,month-1,1).getDay();
        // 本月共几天
        var benyuegongjitian = new Date(year,month,0).getDate();
        // 上月共几天
        var shangyuejitian = new Date(year,month-1,0).getDate();

        // 数组
        var arr = [];
        // 上月的尾巴插入数组中
        while (benyuediyitianxingqiji--){
            arr.unshift(shangyuejitian--)
        };
        //本月进数组
        var count = 1;
        while (benyuegongjitian--){
            arr.push(count++)
        };
        // 下月的进入数组
        count = 1;
        while (arr.length != 35 && arr.length != 42){
            arr.push(count++)
        };

        const showTable = () =>{
            var dom_arr = [];
            for (var i = 0; i < arr.length / 7; i++) {
                dom_arr.push(
                    <tr key={i}>
                        {
                            arr.slice(i*7,i*7+7).map(item=>{
                                // var nongli = solarlunar.solar2lunar(year,month,item);
                                return <td key={item}>
                                    {item}
                                    <br/>
                                    {/* {nongli.term || nongli.dayCn} */}
                                </td>
                            })
                        }
                    </tr>
                )
            };
            return dom_arr;
        }

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <td>日</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {showTable()} */}
                    </tbody>
                </table>
            </>
        )
    }
}
