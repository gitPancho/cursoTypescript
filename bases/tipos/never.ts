(() => {
    const error = (message: string): never | number => {
        if (false) {
            throw new Error(message);
        }
        return 123;
    };

    error('auxilio');
})();
