const { override,addLessLoader ,addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin') // gzip压缩, 可以压缩js css 
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
const path = require('path');

//配置开发模式和打包模式
const addCustom = ()=>{
    return (config)=>{
        if(process.env.NODE_ENV === 'production'){
            config.devtool = false //去除map文件
            config.plugins = [...config.plugins,new CompressionWebpackPlugin({
                test:/.js$|.css$/,
                threshold:1024,
            })]
            
            const { promisify } = require('util')
            const chalk = require('chalk')
            const clear = require('clear')
            const figlet = promisify(require('figlet'))
            clear()
            const log = content=>console.log(chalk.blue(content))
            figlet('YANG').then(res=>log(res))

        }
        return config
    }
}

module.exports = override(
    // 配置别名
    addWebpackAlias({
        ['@']:path.resolve(__dirname,'src')
    }),
    // 配置less
    addLessLoader({
        strictMath: true,
        noIeCompat: true,
        modifyVars: {
        '@primary-color': '#1DA57A', // for example, you use Ant Design to change theme color.
        },
        cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
        cssModules: {
        localIdentName: '[path][name]__[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        },
    }),
    addCustom(),
    process.env.NODE_ENV === 'production'? addWebpackPlugin(
        new WebpackBundleAnalyzer({
            analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
        })
    ) : undefined
);