function greet() {
    return {
        name: '',
        greet: '',
        greetMessage() {
            this.greet = 'Hello, ' + this.name + '!!' + '😊';
        }
    }
}