{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja"; 불변성을 잘 지켜야 한다.
  }
}
