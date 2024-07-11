function workShift() {
    return {
        shift: '',
        get transportfee() {
            switch(this.shift) {
                case 'morning':
                            return 'Transport Fee: R20';
                        case 'afternoon':
                            return 'Transport Fee: R10';
                        case 'nightshift':
                            return 'Transport Fee: Free';

            }
        }
    }

}