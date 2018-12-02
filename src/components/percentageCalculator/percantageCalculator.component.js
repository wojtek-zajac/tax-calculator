angular.module('components')
    .component('calcPercent', {
        template: '<label>Price' +
        '<input ng-model="price" type="number"></label>' +
        '<p>Price with 18% tax: {{ price + (price * 18 / 100) }}</p>'
    })