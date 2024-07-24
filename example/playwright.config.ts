import { defineConfig } from '@playwright/test';
import { webhookReporter } from '../src';

export default defineConfig({
  testDir: '.',
  reporter: [
    webhookReporter('raw', {
      webhookUrl: 'https://webhook.site/dc15c506-0fef-4e4e-b8f7-29e9111e0831',
      headers: {
        'x-my-header': 'foo',
      },
    }),
  ],
});
