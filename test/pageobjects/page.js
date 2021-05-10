export default class Page {
    open (path) {
        return browser.url(path)
    }

    async clearInput(element) {
        const value = await element.getValue();
        for (let i = 0; i < value.length; i++) {
            await element.keys(['Backspace']);
        }
    }
}
