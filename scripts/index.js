const navItems = document.querySelector('.logo');
function navTransition(){
  document.querySelector('.btn-primary').style.display = "none";
  const navRight = document.querySelector('.nav-list');
  if(navRight.style.justifyContent === "flex-end"){
    navItems.style.order = "1";
    navRight.style.order = "0";
    navRight.style.justifyContent = "flex-start";
    navItems.style.display = 'block';
  }
  else{
    navItems.style.order = "0";
    navRight.style.order = "1";
    navRight.style.justifyContent = "flex-end";
    navItems.style.display = 'block';
  }
}
navItems.addEventListener('click',function(){
  document.querySelector('.btn-primary').style.display = "block";
  navItems.style.display = 'none';
  setTimeout(navTransition,800);
})

const todo =new Vue({
  el:'#todo',
  data:{
    message:'',
    todoList:[
      { id : 1, text: '学习java' },
      { id : 2, text: '学习Vue' },
      { id : 3, text: '学习高等数学'},
    ],
  },
  methods:{
    addTodo:function(){
      if(this.message===''){
        alert("请输入内容");
        return;
      }
      this.todoList.unshift({id:this.todoList.length+1,text:this.message});
      this.message = '';
    },
    removeTodo:function(todoId){
      this.todoList = this.todoList.filter(item => item.id !== todoId)
    }

  }
})

window.onload = function() {
  fetch('m.md')
      .then(response => response.text())
      .then(text => {
          document.querySelector('.markdown-content').innerHTML = marked.parse(text);
      });
};