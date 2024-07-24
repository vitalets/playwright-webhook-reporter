# playwright-webhook-reporter
[![npm version](https://img.shields.io/npm/v/playwright-webhook-reporter)](https://www.npmjs.com/package/playwright-webhook-reporter)
[![license](https://img.shields.io/npm/l/playwright-webhook-reporter)](https://github.com/vitalets/playwright-webhook-reporter/blob/main/LICENSE)

Universal [Playwright](https://playwright.dev/) reporter to send test results to any webhook.
Handy presets are included.

## Installation
```
```

## Usage
### Raw
```ts
import { defineConfig } from '@playwright/test';
import { webhookReporter } from 'playwright-webhook-reporter';

export default defineConfig({
  reporter: [
    webhookReporter('raw', {
      webhookUrl: 'https://webhook.site/dc15c506-0fef-4e4e-b8f7-29e9111e0831',
      method: 'post',
      headers: {
        'x-my-header': 'foo'
      },
      // body: 
    })
  ]
});
```

## Feedback
Feel free to share your feedback and suggestions in [issues](https://github.com/vitalets/playwright-network-cache/issues).

## License
[MIT](https://github.com/vitalets/playwright-network-cache/blob/main/LICENSE)