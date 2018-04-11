//load seneca module in memory and config the microservice item.js to ue MongoDB(mongo-store)
require('seneca')()
    .use('item')
    .use('entity')
    .use('mongo-store', {
        name: 'fabio-db-mongo-store',//database name
        host: '127.0.0.1', //localhost
        port: 27017 // mongodb listens on this port
    })
    // listen for role:item messages
    // IMPORTANT: must match client
    .listen({ type: 'tcp', pin: 'role:item' })
