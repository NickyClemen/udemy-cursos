const path = require('path');

/* Da más control y flexibilidad sobre el trabajo de webpack. */
module.exports = {
    entry: {
        index: './src/js/index.js',
        contacto: './src/js/contacto.js',
    }, // Especifica la entrada. Si hay más de uno, se crea un array.
    output: {
        filename: '[name].bundle.js', // Nombre del archivo.
        path: path.join(__dirname, '/dist'), // __dirname toda la carpeta actual.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    }
}