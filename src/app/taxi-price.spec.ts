import TaxiService from './taxi.service'

describe('test taxi', () => {
    it('Given 出租车行驶了1公里(8公里以内)，未发生等待，When 计费，Then 收费2元', () => {
        const price = new TaxiService().calculatePrice(1);
        expect(price).toEqual(2)
    })

    it('Given 出租车恰好行驶了8公里，未发生等待，When 计费，Then 收费16元' , () => {
        const price = new TaxiService().calculatePrice(8);
        expect(price).toEqual(16)
    })
})
