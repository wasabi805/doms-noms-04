const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports ={

    devServer: {
        proxy:{
            '/api' : {
                target: "http://localhost:5000",
                changeOrigin: true
            }
        },
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            //https://stackoverflow.com/a/52327855/7857134
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {loader : "style-loader"},

                    {loader: "css-loader",

                        //THESE OPTIONS make CSS modular with webpack; class name scoped locally and specific to component
                        options: {
                            modules: true, //this is what enables css modules
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]", //[name] = component name , [local]= name of class or id, [hash]=makes a unique hash for every css component
                            sourceMap: true,
                        }
                    },

                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
        ]
    },

    plugins: [htmlPlugin]
};