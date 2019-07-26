const path = require ( 'path' )


module.exports = {
   entry: { main: './js/script.js' },
   output: {
      path: path.resolve ( __dirname, 'build' ),
      filename: 'index.js'
   },
   module: {
      rules: [
   //      {
   //          test: /\.js$/,
   //          loader:'babel-loader'
   //        //  exclude: '/node_modules/'
   //      },
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