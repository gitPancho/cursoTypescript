(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPowers(id: number): string;
    }
    interface Human {
        age: number;
    }
    // class Mutant implements Xmen, Human {
    //     public age: number;
    //     public name: string;
    //     public realname: string;

    //     mutantPowers(id: number) {
    //         return this.name + ' ' + this.realname;
    //     }
    // }
})();
