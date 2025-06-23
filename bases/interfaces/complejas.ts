(() => {
    interface Clinet {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    const client: Clinet = {
        name: 'Carlos',
        age: 24,
        address: { id: 1, zip: '12345', city: 'Madrid' },
        getFullAddress(id: string) {
            return this.name + ' ' + this.address.city;
        },
    };

    const client2: Clinet = {
        name: 'melissa',
        age: 30,
        address: { id: 2123, zip: 'dsadas', city: 'Madrid' },
        getFullAddress(id: string) {
            return this.name + '' + this.address.city;
        },
    };
})();
