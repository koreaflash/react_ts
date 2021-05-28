module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devServer: {
        contentBase: "./",
        publicPath: "/dist"
    }
}