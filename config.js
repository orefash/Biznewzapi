const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    // host: env.DB_HOST || 'ec2-52-210-192-83.eu-west-1.compute.amazonaws.com',
    // port: env.DB_PORT || '5432',
    // user: env.DB_USER || 'iwsegcgvtipkre',
    // password: env.DB_PASSWORD || '93a6714435851cc7745d61692bf73f8df3a1e685f07df84cf7cb5ef647fa96ab',
    // database: env.DB_NAME || 'd4boee5tb9aure',

    // ssl: true,
    // dialect: 'postgres',
    // dialectOptions: {
    //   "ssl": { "require": true }
    // }
    connectionString: "postgres://iwsegcgvtipkre:93a6714435851cc7745d61692bf73f8df3a1e685f07df84cf7cb5ef647fa96ab@ec2-52-210-192-83.eu-west-1.compute.amazonaws.com:5432/d4boee5tb9aure",
    ssl: {    /* <----- Add SSL option */
      rejectUnauthorized: false,
    }
  },
  listPerPage: env.LIST_PER_PAGE || 12,
};

module.exports = config;