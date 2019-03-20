module.exports = ({config, configType}) => {
    config.output.path = configType === 'PRODUCTION' ? '/next-stepper/' : '/';
    return config;
  };
  