import { test, expect } from '@playwright/test';

export function getStarshipModel(props) {
    return {
        name: expect.any(String),
        model: expect.any(String),
        manufacturer: expect.any(String),
        cost_in_credits: expect.any(String),
        length: expect.any(String),
        max_atmosphering_speed: expect.any(String),
        crew: expect.any(String),
        passengers: expect.any(String),
        cargo_capacity:  expect.any(String),
        consumables: expect.any(String),
        hyperdrive_rating: expect.any(String),
        MGLT: expect.any(String),
        starship_class: expect.any(String),
        pilots: expect.any(Array),
        films: expect.any(Array),
        created: expect.any(String),
        edited: expect.any(String),
        url: expect.any(String),
        ...props
    }
}