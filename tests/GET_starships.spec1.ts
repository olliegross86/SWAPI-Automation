import { test, expect } from '@playwright/test';

import { getStarshipModel } from '../models/starshipmodel';

test.describe("API.GET.starships", () =>{
  test('Get some SW starships', async ({ request }) => {
    const getCharacters = await request.get(`${process.env.STARSHIPS_URL}`,{});
    await expect(getCharacters.ok()).toBeTruthy();
    const characterList = await getCharacters.json();
    console.log(characterList);
    await expect(characterList).toEqual(getStarshipModel({name: "Death Star"}));
})
})
