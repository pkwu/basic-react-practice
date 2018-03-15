#Introduction

## Install && Setup postgresql
```
brew install postgresql
brew services start postgresql
createuser root
createdb boilerplate
psql boilerplate
```

## Setup Environment
```
npm install
npm run buildEnv
npm run setup:rest-server
npm run db:setup:rest-server
mongod
```

### Start the Servers
```
npm run start
```