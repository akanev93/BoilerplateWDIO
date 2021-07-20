import Dropdown from 'src/the-internet/dropdown.page';

describe.skip('Dropdown', () => {
    it('should work', () => {
        Dropdown.open();
        expect(Dropdown.select).toHaveValue('');
        Dropdown.select.selectByAttribute('value', '1');
        expect(Dropdown.select).toHaveValue('1');
    });
});
