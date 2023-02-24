import mongoose from 'mongoose';
import config from './env';

interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel?: string;
    useNewUrlParser?: boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};

const MONGO_URI: string = `${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`;

export const db: mongoose.Connection = mongoose.createConnection(MONGO_URI, connectOptions);

// handlers
db.on('connecting', () => {
    console.log('\x1b[32m', 'MongoDB :: connecting','\x1b[0m');
});

db.on('error', (error) => {
    console.log('\x1b[31m', `MongoDB :: connection ${error}`,'\x1b[0m');
    mongoose.disconnect();
});

db.on('connected', () => {
    console.log('\x1b[32m', 'MongoDB :: connected','\x1b[0m');
});

db.once('open', () => {
    console.log('\x1b[32m', 'MongoDB :: connection opened','\x1b[0m');
});

db.on('reconnected', () => {
    console.log('\x1b[33m"', 'MongoDB :: reconnected','\x1b[0m');
});

db.on('reconnectFailed', () => {
    console.log('\x1b[31m', 'MongoDB :: reconnectFailed','\x1b[0m');
});

db.on('disconnected', () => {
    console.log('\x1b[31m', 'MongoDB :: disconnected','\x1b[0m');
});

db.on('fullsetup', () => {
    console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d','\x1b[0m');
});
