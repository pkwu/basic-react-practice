const envBuild = {
  'server': [
    'PORT=3000'
  ],
  'client': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'REST_SERVER_URL=http://localhost:1337'
  ]
};

module.exports = envBuild;