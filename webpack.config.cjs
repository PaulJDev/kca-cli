const TerserPlugin = require('terser-webpack-plugin')
const path = require('node:path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Elimina las declaraciones de consola (útil para producción)
          },
          output: {
            comments: false, // Elimina comentarios
          },
        },
      }),
    ],
  },
}
