(() => {
    const fulllName = (firstName: string, lastName: string, ...restArg: string[]): string => {
        return `${firstName} ${restArg.join(' ')} ${lastName}`;
    };
    const superman = fulllName('Clark', 'Joseph', 'Kent', 'Superman', 'Man of Steel', '1938-1939');
    console.log({ superman });
})();
