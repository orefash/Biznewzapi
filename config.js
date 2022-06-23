const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
  
    connectionString: env.DB_URL,
    ssl: {    /* <----- Add SSL option */
      rejectUnauthorized: false,
    }
  },
  listPerPage: env.LIST_PER_PAGE || 12,
};

module.exports = config;