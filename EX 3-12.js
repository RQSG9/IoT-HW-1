setTimeout(function () { console.log(this); }, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
    console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>'; // HTML 버튼 추가 (실행 시점에 필요)
document.body.querySelector('#a')
    .addEventListener('click', function (e) {         // (3) this는 이벤트를 발생시킨 요소 (여기서는 버튼 #a)
        console.log(this, e);
    });