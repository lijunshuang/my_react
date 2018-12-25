import server from './server';
import querystring from 'querystring';
import mock from 'mockjs';

// 得到数据
export const getTb1 = (qs) => {
    // 真实接口
    // return server({
    //     method: 'get',
    //     url: '/getTb1?'+ querystring.stringify(qs)
    // });

    //模拟接口
    return {
        'results' : [
            {
                value: (function(){
                    return mock.Random.integer(10,999)
                })(),
                name: '直接访问'
            },
            {
                value: (function(){
                    return mock.Random.integer(10,999)
                })(),
                name: '邮件营销'
            },
            {
                value: (function(){
                    return mock.Random.integer(10,999)
                })(),
                name: '联盟广告'
            },
            {
                value: (function(){
                    return mock.Random.integer(10,999)
                })(),
                name: '视频广告'
            },
            {
                value: (function(){
                    return mock.Random.integer(10,999)
                })(),
                name: '搜索引擎'
            },
        ]
    }
}

// 得到数据---散点图
export const getTb2 = (qs) => {
    // 真实接口
    // return server({
    //     method: 'get',
    //     url: '/getTb1?'+ querystring.stringify(qs)
    // });

    return {
        'data': [
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)],
            [mock.Random.integer(10,999),mock.Random.integer(10,999)]
        ]
    }
}