import { test, expect } from '@playwright/test';

import { getCharacterModel } from '../models/charactermodel'

test.describe("API.GET.Luke Skywalker", () =>{
  test('Get Luke Skywalker', async ({ request }) => {
    //Send a GET request
    const getCharacters = await request.get(`${process.env.CHARACTER_URL} `+ '1',{});
    //Was response in the 200 range
    await expect(getCharacters.ok()).toBeTruthy();
    //Was response 200
    await expect(getCharacters.status()).toBe(200);
    //Get the JSON body of the request
    const characterList = await getCharacters.json();
    console.log(characterList);
    //Does the response match what is expected
    await expect(characterList).toEqual(getCharacterModel({name:"Luke Skywalker"}));
})
})

/* test.describe("API.GET.characters-Basic", () =>{
  test('Basic Auth Get some SW characters', async ({ request }) => {
    const getCharacters = await request.get("https://swapi.dev/api/people/1",{
      headers: {
        Authorization: `Basic ${process.env.basicToken}`
      }
    });
    await expect(getCharacters.ok()).toBeTruthy();
    const characterList = await getCharacters.json();
    console.log(characterList);
    await expect(characterList).toEqual(getCharacterModel({}));
})
})

test.describe("API.GET.characters-OAuth", () =>{
  test('Basic Auth Get some SW characters', async ({ request }) => {
    const getCharacters = await request.get("https://swapi.dev/api/people/1",{
      headers: {
        Authorization: `Bearer ${process.env.bearerToken}`
      }
    });
    await expect(getCharacters.ok()).toBeTruthy();
    const characterList = await getCharacters.json();
    console.log(characterList);
    await expect(characterList).toEqual(getCharacterModel({}));
})
}) */