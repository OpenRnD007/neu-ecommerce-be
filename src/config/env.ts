import * as dotenv from 'dotenv';

dotenv.config();


interface IConfig {
    port: string | number;
    database: {
        MONGODB_URI: string;
        MONGODB_DB_MAIN: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://neustack:oQ0pS3AZTxLXdbcQ@cluster0.hgmewrd.mongodb.net/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'ecommerce'
    },
    secret: process.env.SECRET || '@QEGTERUI'
};

const production: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'ecommerce'
    },
    secret: process.env.SECRET || '@QEGTERUI'
};

const test: IConfig = {
    port: process.env.PORT || 3001,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
        MONGODB_DB_MAIN: 'qa_ecommerce'
    },
    secret: process.env.SECRET || '@QEGTERUI'
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
