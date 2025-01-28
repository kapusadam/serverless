exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const path = event.rawPath; 
    const httpMethod = event.requestContext.http.method;

    const validPath = '/hello';
    const validMethod = 'GET';

    if (path !== validPath || httpMethod !== validMethod) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`
            })
        };
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,
            message: 'Hello from Lambda'
        })
    };

    return response;
};