import Home from 'src/wdio/home.page';

import logger from '@wdio/logger';
const log = logger('test-basic');

describe.skip('webdriver.io page', () => {
    it('should have the right title', () => {
        Home.open();
        log.debug('check the title'); // just to demonstrate logging in spec file
        expect(browser).toHaveTitle(Home.title);
    });
});

describe.skip('browser', () => {
    it('can access custom command', () => {
        expect(browser.customConfig().text).toBe('Hi Custom Command');
    });
});

describe('first test ozone page', () => {
    before(() => {
        Home.open();
    });
    it('test title', () => {
        expect(browser).not.toHaveTitle(Home.title);
    });
});
