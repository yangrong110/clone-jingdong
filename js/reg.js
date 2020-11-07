var tel = document.querySelector('#tel');
var regtel = /^1[3|5|7|8]\d{9}$/ //手机号验证
tel.onblur = function() {
    if (regtel.test(this.value)) {
        console.log('正确的');
    } else {
        console.log('错误的');
    }

}