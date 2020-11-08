module.exports = (api) =>{
    api.cache(true);
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: '> 2%, not dead',
          useBuiltIns: 'usage',
          corejs: '3',
        },
      ],
      [
        "@babel/preset-react",
      ],
      
    ];
    const plugins = [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        "react-hot-loader/babel",
      ],
    ];
    return {
      presets,
      plugins,
    };
};