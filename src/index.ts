import type { FullConfig, FullResult, Reporter, Suite } from '@playwright/test/reporter';

export function webhookReporter<T extends 'raw'>(preset: T, options: WebhookReporterOptions) {
  return [__filename, options] as const;
}

export type WebhookReporterOptions = {
  webhookUrl: string;
  method?: 'POST' | 'PUT' | 'PATCH';
  headers?: Record<string, string>;
  // todo: process body
};

export default class WebhookReporter implements Reporter {
  suite!: Suite;
  constructor(private options: WebhookReporterOptions) {}

  onBegin(_config: FullConfig, suite: Suite) {
    this.suite = suite;
  }

  async onEnd(result: FullResult) {
    const { webhookUrl, method = 'POST', headers } = this.options;
    const body = JSON.stringify(result);
    const res = await fetch(webhookUrl, { method, headers, body });
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText} ${await res.text()}`);
    }
  }
}
