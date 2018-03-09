const envBuild = {
  'server': [
    'PORT=3000'
  ],
  'client': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'REST_SERVER_URL=http://localhost:3396'
  ]
};

module.exports = envBuild;