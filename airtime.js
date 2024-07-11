function airtime() {
    return {
        projectedUsage: '',
        availableAirtime: 0,
        result: '',
        RemainingAirtime() {
            const usage = this.projectedUsage.split(',');
                let totalCost = 0;
                const callCost = 1.88;
                const dataCost = 12;
                const smsCost = 0.75;

                for (const item of usage) {
                    if (item.trim() === 'call') {
                        totalCost += callCost;
                    } else if (item.trim() === 'data') {
                        totalCost += dataCost;
                    } else if (item.trim() === 'sms') {
                        totalCost += smsCost;
                    }
                }

                const remainingAirtime = this.availableAirtime - totalCost;
                const totalRemainingAirtime = 'R' + remainingAirtime.toFixed(2);

                if (remainingAirtime < 0.00) {
                    this.result = 'R0.00';
                } else {
                    this.result = totalRemainingAirtime;
                }

        }
    }
}