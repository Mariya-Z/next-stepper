module.exports = ({config, mode}) => {
    config.output.publicPath = mode === 'PRODUCTION' ? '/next-stepper/' : '/';
    return config;
  };
  