(() => {
    class Apocalipsis {
        static intance: Apocalipsis;
        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier');
    // console.log(apocalipsis3);
    // console.log(apocalipsis2);
    // console.log(apocalipsis);
})();
