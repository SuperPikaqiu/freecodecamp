const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const glob = require("glob");
const merge = require("webpack-merge");
const webpack = require("webpack");

var entrys = glob.sync("./project/**/index.js");

//对于每一个页面，提取特有的配置项
function getConfig(strPath) {
    var regName = /.*\/(.*)\/index.js/;
    var filename = strPath.match(regName)[1];
    var regPath = /(.*)index.js$/;
    var parentPath = strPath.match(regPath)[1];
    // console.log(filename);
    // console.log(parentPath);
    return {
        entry: {
            [filename]: strPath
        },
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, `dist/${filename}`)
        },
        plugins: [
            new htmlWebpackPlugin({
                template: parentPath + "index.html",
                filename: "index.html",
                chunksSortMode: "none"
            })
        ]
    };
}

var baseConfig = {
    mode: "production",
    devtool: "inline-source-map",
    devServer:{
        contentBase:'./dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(["dist"]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        })
    ],
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};

module.exports = entrys.map(val => {
    return merge(baseConfig, getConfig(val));
});
