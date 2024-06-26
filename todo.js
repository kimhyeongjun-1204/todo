window.onload = function () {
    var weekArr = ["S", "M", "T", "W", "T", "F", "S"];
    // div class="week" 태그 안에 요일 태그 추가 
    var container = document.querySelector(".week");
    for (var i in weekArr) {
        var span = document.createElement("span");
        span.id = "week" + i;
        span.textContent = weekArr[i] + " ";

        container.appendChild(span);
    }


    // todo리스트 만들기(7개) 
    var container = document.querySelector(".todo");
    for (var i = 0; i < 7; i++) {
        var color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        var checkNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

        var todo = document.createElement("div");
        todo.id = "todo" + i;

        //1. 원 생성
        var circle = document.createElement("div");
        circle.className = 'circle';
        circle.style.backgroundColor = color[i];

        //2. 작성 리스트 생성
        var input = document.createElement("input");
        input.id = "list" + i;
        input.type = "text";
        input.style.display = "inline-block";


        //3. 사각형(체크 리스트 생성)
        var checkbox = document.createElement("input");

        checkbox.id = "checkbox" + i;
        checkbox.type = "checkbox"
        checkbox.name = "checkbox"
        checkbox.style.accentColor = color[i];
        checkbox.value = checkNum[i];


        todo.appendChild(circle);
        todo.appendChild(input);
        todo.appendChild(checkbox);

        container.appendChild(todo);
    }

    /* 자동으로 Date 태그에 일자 적기 */
    var date = document.querySelector("#select_day");
    var dateValue = date.value;
    var month = document.querySelector("#month");
    var dayofmonth = document.querySelector("#dayofmonth");

    var dateTransfer = new Date(dateValue);
    month.textContent = dateTransfer.getMonth() + 1;
    dayofmonth.textContent = dateTransfer.getDate();



}

// 행 추가*삭제 
var index = 4; /* 추가될 인덱스 */

var btnAdd = document.querySelector("#add");
var btnDelete = document.querySelector("#delete");
var select = document.querySelector("#select_day");
var month = document.querySelector("#month");
var dayofmonth = document.querySelector("#dayofmonth");

function addTodo() {
    if (index === 7) {
        alert('더이상 추가할 수 없습니다.');
        return;
    }
    var obj = document.querySelector("#todo" + index);
    obj.style.display = "flex";
    index++;
}

function deleteTodo() {
    if (index === 1) {
        alert('더이상 삭제할 수 없습니다.');
        return;
    }
    index--;
    var obj = document.querySelector("#todo" + index);
    obj.style.display = "none";
}

/* 일자 선택 변경되면 같이 변경되게  */
function dayChange() {
    var selectValue = select.value;
    var selectDay = new Date(selectValue);

    month.textContent = selectDay.getMonth() + 1;
    dayofmonth.textContent = selectDay.getDate();
}

btnAdd.addEventListener('click', addTodo);
btnDelete.addEventListener('click', deleteTodo);
select.addEventListener('change', dayChange);