// generate a unit test for the Footer component using vitest

import { describe,  test , expect} from 'vitest';
import Footer from './Footer.astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

describe('Footer', () => {
    test('renders correctly', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer); 

        expect(result).toContain('2024')
        expect(result).toContain('Email')
        expect(result).toContain('Linkedin')
        expect(result).toContain('Github')
    }); 
})
