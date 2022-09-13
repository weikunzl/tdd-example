export default class TaxiService {
    private UNIT_PRICE = 2;

    calculatePrice(distance: number): number {
        return distance * this.UNIT_PRICE
    }
}
