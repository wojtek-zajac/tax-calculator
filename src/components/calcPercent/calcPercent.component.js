angular.module('components')
    .component('calcPercent', {
        bindings: { tax: '@' },
        template: '<label>Price' +
        '<input ng-model="price" type="number"></label>' +
        '<p>Price with 18% tax: {{ price + (price * $ctrl.tax / 100) }}</p>'
    })