// Config de nuestro proyecto
const path = require('path'); // Acceder a donde nos estamos moviendo en el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Archivo para trabajar con html
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  // Punto de entrada (codigo inicial)
  entry: './src/index.js',
  // Donde va a salir ya estructurado
  output: {
    // Direccion y nombre de la carpeta
    path: path.resolve(__dirname, 'dist'),
    // Nombre del archivo a generar
    filename: 'main.js'
  },
  // Extensiones que utilizaremos en nuestro proyecto
  resolve: {
    extensions: ['.js'],
  },
  // Reglas con la que vamos a trabajar
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/, // Excluivos la carpeta
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html', // Temp. base
        filename: './index.html', // Temp. destino
      }
    ),
    new CopyWebpackPlugin({
      patterns: [{from: './src/styles/style.css',
      to: ''}],
    }),
  ]
}