angular.module('showcase.withAjax', ['datatables']).controller('WithAjaxCtrl', WithAjaxCtrl);

function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var subscriptionlist;
    $http.get('http://localhost:4000/api/getsubcriptionlist').success(function(data){
      subscriptionlist=data;
      console.log('Received Data from server:'+data);
    });
    // vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
    vm.dtOptions = DTOptionsBuilder.fromSource(subscriptionlist)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('_id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn('cost').withTitle('Cost')
    ];
}
