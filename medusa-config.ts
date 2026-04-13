import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    // Database connection string
    databaseUrl: process.env.DATABASE_URL,
    
    // DigitalOcean Managed Database ke liye zaroori SSL options
    databaseDriverOptions: {
      connection: {
        ssl: process.env.DB_CA_CERT 
          ? { 
              ca: process.env.DB_CA_CERT,
              rejectUnauthorized: true 
            } 
          : { 
              rejectUnauthorized: false 
            },
      },
    },

    // Redis connection
    redisUrl: process.env.REDIS_URL, 

    // Medusa standard HTTP settings
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})