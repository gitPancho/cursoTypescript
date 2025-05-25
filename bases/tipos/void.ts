(() => {
    function callBatman(): void {}
    const a = callBatman();
    console.log({ a });

    const callSuperman = (): void => {};
    const b = callSuperman();
    console.log({ b });
})();
