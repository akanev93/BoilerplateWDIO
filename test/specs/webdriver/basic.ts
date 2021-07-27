import Home from 'src/wdio/home.page';

import logger from '@wdio/logger';
const log = logger('test-basic');
const axios = require('axios');

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
        browser.addCommand('getCurrentImg', function (url) {
            return axios.get(url).then((response) => console.log(response.body));
        });
    });
    it('test title', () => {
        expect(browser).toHaveTitle(Home.title);
    });
    it('test banner images', () => {
        const url = Home.currentImgUrl.map(item => item.getAttribute('src'));
        console.log(url);
        url.forEach(item => {
            const el = browser.getCurrentImg(item);
            console.log(el);
        });
    });
});
