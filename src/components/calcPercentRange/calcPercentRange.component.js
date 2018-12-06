calcComponents
    .component('calcPercentRange', {
        bindings: {
            tax: '@'
        },
        template:
            '<label>Price: {{price}}' +
            '<input ng-model="price" type="range" min="0" step="1"></label>' +
            '<p>Price with 32% tax: {{ price + (price * $ctrl.tax / 100) }}</p>'
    });