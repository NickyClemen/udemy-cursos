const path = require('path');

/* Da más control y flexibilidad sobre el trabajo de webpack. */
module.exports = {
    entry: './src/js/index.js', // Especifica la entrada. Si hay más de uno, se crea un array.
    output: {
        filename: 'bundle.js', // Nombre del archivo.
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
    }
}