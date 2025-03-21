import { describe, expect, it } from 'vitest';
import type { FedifyContext } from '../app';
import { FedifyContextFactory } from './fedify-context.factory';

describe('FedifyContextFactory', () => {
    it('Gives back the fedify context when called in the register callback', async () => {
        const context = {} as unknown as FedifyContext;

        const fedifyContextFactory = new FedifyContextFactory();

        await fedifyContextFactory.registerContext(context, async () => {
            const retrieved = fedifyContextFactory.getFedifyContext();
            expect(retrieved).toBe(context);
        });
    });
});
