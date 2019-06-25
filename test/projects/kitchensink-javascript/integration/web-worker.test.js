const { initTest } = require('../../../utils');

describe('web-worker', () => {
  it('creates a web worker bundle on the page', async () => {
    const logged = new Promise(resolve => {
      page.on('console', msg => {
        if (msg.type() === 'log') {
          resolve(msg.text());
        }
      });
    });

    await initTest('web-worker');

    expect(await logged).toBe('hello from a web worker');
  });

  it('supports externals for web-worker', async () => {
    const logged = new Promise(resolve => {
      page.on('console', msg => {
        if (msg.type() === 'info') {
          resolve(msg.text());
        }
      });
    });

    await initTest('web-worker');

    expect(await logged).toBe('Some external text');
  });

  // jest.setTimeout(999990);
  // await jestPuppeteer.debug();

  // it('refresh the browser after a change in the web-worker has occured', async () => {
  // TODO
  // });
});
