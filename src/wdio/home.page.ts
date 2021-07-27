import BasePage from '../base.page';

class Home extends BasePage {
    get title() { return 'OZON — интернет-магазин. Миллионы товаров по выгодным ценам'; }

    get currentImgUrl() {
        return $$('//*[@data-widget="advBanner"]//img');
    }

    /**
     * Opens the page
     */
    open() {
        super.open('https://www.ozon.ru/');
    }
}

export default new Home();
