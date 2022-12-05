import { test, expect } from '@playwright/test';

export function getPlanetModel(props) {
    return {
        name: expect.any(String),
        rotation_period: expect.any(String),
        orbital_period: expect.any(String),
        diameter: expect.any(String),
        climate: expect.any(String),
        gravity: expect.any(String),
        terrain: expect.any(String),
        surface_water: expect.any(String),
        population:  expect.any(String),
        residents: expect.any(Array),
        films: expect.any(Array),
        created: expect.any(String),
        edited: expect.any(String),
        url: expect.any(String),
        ...props
    }
}