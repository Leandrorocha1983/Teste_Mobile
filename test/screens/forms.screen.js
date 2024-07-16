class HomeScreen {
    async gotToForm() {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
        await $('~text-input').setValue('teste')
    }

}

module.exports = new HomeScreen