import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe ('Test Suite: Add to Cart', () => {
    it ('Adds existing product', () => {
        
    });

    it ('Adds a new product', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
});