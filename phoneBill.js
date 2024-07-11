function phoneBill() {
    return {
        inputString: '',
        result: '',
        bill() {
            const entries = this.inputString.split(', ');
            let callCount = 0;
            let smsCount = 0;
            for (const entry of entries) {
                if (entry === 'call') {
                    callCount++;
                } else if (entry === 'sms') {
                    smsCount++;
                }
            }
            const callCost = callCount * 2.75;
            const smsCost = smsCount * 0.65;
            const totalCost = callCost + smsCost;
            this.result = `Total phone bill: R${totalCost.toFixed(2)}`;

        }

    }
}