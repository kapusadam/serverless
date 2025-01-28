exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const validPath = '/hello';

    if (event.path !== validPath) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: 'Bad request syntax or unsupported method. Request path: ${event.path}. HTTP method: ${event.httpMethod}'
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