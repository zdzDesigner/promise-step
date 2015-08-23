/**
 * author zdzDesigner 2015.08.23
 * 实现promise的链式调用
 */
 
 var ref = function(value) {
    if(value && value.then === 'function') return value;
    return {
        then:function(callback) {
            return ref(callback(value));
        }
    }
};


var promise = ref("step1");

promise.then(function(value){
    console.log(value); // "step1"
    return 15;
}).then(function(value){
    console.log(value); // 15
    return 'zdz'
}).then(function(value){a
    console.log(value); // zdz
});