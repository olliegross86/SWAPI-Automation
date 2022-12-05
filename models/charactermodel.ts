import { test, expect } from '@playwright/test';

export function getCharacterModel(props) {
    return {
        name: expect.any(String),
        height: expect.any(String),
        mass: expect.any(String),
        hair_color: expect.any(String),
        skin_color: expect.any(String),
        eye_color: expect.any(String),
        birth_year: expect.any(String),
        gender: expect.any(String),
        homeworld:  expect.any(String),
        films: expect.any(Array),
        species: expect.any(Array),
        vehicles: expect.any(Array),
        starships: expect.any(Array),
        created: expect.any(String),
        edited: expect.any(String),
        url: expect.any(String),
        ...props
    }
}