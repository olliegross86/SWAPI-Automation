import { test, expect, request } from '@playwright/test';


exports.APIHome = class APIHome {

    async API_helper(url, api_response)
    {
      await expect.poll(async () => {
        const response = await this.page.request.get(url);
        console.log(await response.json());
        return response.status();
      }, {
        // Custom error message, optional.
        message: 'make sure API eventually succeeds', // custom error message
        // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.
        timeout: 10000,
      }).toBe(api_response);  

  }
    /** 
    *@param {import('@playwright/test'.Page)} page
    */
    constructor(page){
        this.page = page
       }
} 