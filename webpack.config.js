const path = require ( 'path' )


module.exports = {
   entry: { main: './js/script.js' },
   output: {
      path: path.resolve ( __dirname, 'build' ),
      filename: 'index.js'
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },
         
         {
               test: /\.html$/,
               use: [ "html-loader" ]
         }
   
      ]
   },

}