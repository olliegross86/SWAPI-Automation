import { test, expect } from '@playwright/test';

import { getCharacterModel } from '../models/charactermodel'
import { getPlanetModel } from '../models/planetmodel';

test.describe("API.GET.planets", () =>{
  test('Get some SW planets', async ({ request }) => {
    const getCharacters = await request.get(`${process.env.PLANETS_URL}`,{});
    await expect(getCharacters.ok()).toBeTruthy();
    const characterList = await getCharacters.json();
    console.log(characterList);
    await expect(characterList).toEqual(getPlanetModel({name:"Yavin IV"}));
})
})

