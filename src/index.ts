import * as http from 'http';
import * as serverEventHandlers from './serverEventHandlers';
import server from './server';

const Server: http.Server = http.createServer(server);

/**
 * Binds and listens for connections on the specified host
 */
Server.listen(server.get('port'));

/**
 * Server Events
 */
Server.on('error',
    (error: Error) => serverEventHandlers.onError(error, server.get('port')));
Server.on('listening',
    serverEventHandlers.onListening.bind(Server));

