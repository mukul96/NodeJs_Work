$(function () {

    let newtodoel = $('#newtodo')
    let addtodobtn = $('#addtodo')
    let todolist = $('#todolist')

    function refreshTodos() {
        todolist.empty();
        $.get('/todos',
            function (data) {
                for (todo of data) {
                    todolist.append($(`
                        <li> 
                        <span>${todo.task}</span>
                        <span>done = ${todo.done}</span>
                        </li>`
                    ))
                }
            }
        )
    }

    refreshTodos();

    addtodobtn.click(function () {

        $.post('/todos',
            {task: newtodoel.val()},
            function (data) {
                if (data.success) {
                    console.log("checking the post request")
                    refreshTodos();
                }
                else{
                    console.log("the post request not working")
                }
            }
        )

    })



})
