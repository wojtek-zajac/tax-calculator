calcComponents
    .component('calcGcd', {
        controller: controller,
        controllerAs: 'ctrl',
        template: 
            '<label><input ng-model="ctrl.numberA" type="number"></label>' +
            '<label><input ng-model="ctrl.numberB" type="number"></label>' +
            '<button ng-click="ctrl.calc()">Calculate</button>' +
            '<button ng-click="ctrl.reset()">Reset</button>' +
            '<p ng-hide="ctrl.resultHidden">Result: {{ ctrl.result }}</p>' +
            '<p ng-hide="ctrl.errorHidden">Values must be non-zero</p>'
    });

function controller() {
    const ctrl = this;

    const INPUT_INIT_VALUE = 1;

    ctrl.$onInit = () => {
        setInitState();
    };

    ctrl.calc = () => {
        ctrl.result = gcdCalc(ctrl.numberA, ctrl.numberB);
        ctrl.resultHidden = false;
    };

    ctrl.reset = () => {
        setInitState();
    };

    function setInitState() {
        ctrl.numberA = INPUT_INIT_VALUE;
        ctrl.numberB = INPUT_INIT_VALUE;
        ctrl.resultHidden = true;
        ctrl.errorHidden = true;
    };

    function gcdCalc(a, b) {
        if (!b) {
            return a;
        };

        return gcdCalc(b, a % b);
    };
};
