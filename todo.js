        window.onload = function() {
        var weekArr = ["S", "M", "T", "W", "T", "F", "S"];
        // div class="week" 태그 안에 요일 태그 추가 
        for(var i in weekArr) {
            var container = document.querySelector(".week") ;
            var span = document.createElement("span");
            span.id="week" + i;
            span.textContent=weekArr[i] + " ";
            
            container.appendChild(span);
        }

       
        // todo리스트 만들기(7개) 
        for(var i=0;i<7;i++) { 
            var container = document.querySelector(".todo");
            var color = ['red','orange','yellow','green','blue','indigo','violet'];
            var checkNum = ['one','two','three','four','five','six','seven'];

            var todo = document.createElement("div");  
            todo.id="todo"+i;

            //1. 원 생성
            var circle = document.createElement("span");  
            circle.className = 'circle';
            circle.style.backgroundColor=color[i];
            circle.style.borderRadius='50%';
            circle.style.display="inline-block";  

            //2. 작성 리스트 생성
            var input = document.createElement("input"); 
            input.id="list" + i; 
            input.type="text";
            input.style.display="inline-block";
           

            //3. 사각형(체크 리스트 생성)
            var checkbox = document.createElement("input");  
            
            checkbox.id="checkbox" + i; 
            checkbox.type="checkbox"
            checkbox.name="checkbox"
            checkbox.style.accentColor=color[i];
            checkbox.value=checkNum[i]


            todo.appendChild(circle);
            todo.appendChild(input);
            todo.appendChild(checkbox);

            container.appendChild(todo);
        }
    }   