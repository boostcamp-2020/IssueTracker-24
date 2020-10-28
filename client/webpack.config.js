const path = require('path');
module.exports = {
    name: 'issue-tracker',
    mode: 'development',
    resolve: {
      extensions : ['.jsx', '.js'],
    },
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
           }
         }],  
    },
    entry:{
      app: ['./hello']
    },
    output:{
        path:path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
}