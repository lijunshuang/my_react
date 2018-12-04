const path = require("path");
module.exports = {
    mode : "development", // 开发模式
    entry : "./app/main.js", //入口文件
    output : {// 出口文件
        filename : "bundle.js", //文件名
        path: path.resolve(__dirname , "dist"), //文件绝对路径
    },
    module: {
        rules: [
            {   //配置less-loader
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            { //配置babel-loader
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["env","react"],
                    plugins: ["transform-object-rest-spread"]
                  }
                }
            }
        ]
    },
    resolve: {
        //配置别名 省略扩展名
        extensions: ['.js', '.json'],
        //默认主文件
        mainFiles: ['index','Index']
    },
    watch : true, //实时监控
}