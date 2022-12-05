exports.SWAPIHome = class SWAPIHome {

  /*   get navBar(){
        return this.page.locator('[class="navbar-header"]')
    } */

    get navBar(){
        return this.page.locator('[class="collapse navbar-collapse"]')
    }

    get aboutButton(){
        return this.page.locator('text=About')
    }

    get apiTextField(){
        return this.page.locator('[id="interactive"]')
    }

    get requestButton(){
        return this.page.locator('[class="input-group-btn"]')
    }


    /** 
    *@param {import('@playwright/test'.Page)} page
    */
   constructor(page){
    this.page = page
   }

   async goto(){
    await this.page.goto("https://swapi.py4e.com/")
   }

   async waitForNavigation(options){
    await  this.page.waitForNavigation(options)
   }

} 