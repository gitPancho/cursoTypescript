(() => {
    class Averger {
        static avgAge?: number = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(private name: string, private team?: string, public realName?: string) {}
        public bio() {
            return `${this.name} ${this.realName}`;
        }
    }

    const antman = new Averger('antman', 'cap', 'Scott Lang');
    // console.log(antman);
    // console.log(antman.bio());
    // console.log(Averger.getAvgAge());
})();
