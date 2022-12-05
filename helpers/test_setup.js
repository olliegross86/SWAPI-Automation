const { request } = require('@playwright/test')

module.exports = async () => {

    ///Basic Auth Set Up

    var userName = `${process.env.CLIENT_USERNAME}`;
    var passsWord = `${process.env.CLIENT_PASSWORD}`;
    var authToken = btoa(`${userName}:${passsWord}`);
    process.env.basicToken = authToken;

    //OAuth Set Up
    const requestContext = await request.newContext();
    var clientId = `${process.env.CLIENT_ID}`;
    var clentSecret = `${process.env.CLIENT_SECRET}`;
    var authBearerToken = btoa(`${clientId}:${clentSecret}`)
    
    var apiResponse = await requestContext.post("oauthtoken_url", {
        headers:{
            'Accept':'*/*',
            'Aurthorization':`Basic ${authBearerToken}`
        },
        ignoreHTTPSErrors:true,
        form: {
            'grant_type' : "password",
            'username': `${process.env.CLIENT_USERNAME}`,
            'password': `${process.env.CLIENT_PASSWORD}`,
            'scope': "*"
        }
    })

    apiResponseJson = await apiResponse.json();
    process.env.authToken = apiResponse.access_token;
}