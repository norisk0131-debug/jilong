function login(){
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value.trim();

  let users=JSON.parse(localStorage.getItem("users"))||[];

  const user=users.find(u=>u.email===email && u.password===password);

  if(user){
    localStorage.setItem("currentUser",email);
    window.location.href="../community.html";
  }else{
    showMsg("정보가 일치하지 않습니다.");
  }
}

function register(){
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value.trim();

  if(!name||!email||!password){
    showMsg("모든 항목을 입력해주세요.");
    return;
  }

  let users=JSON.parse(localStorage.getItem("users"))||[];

  if(users.find(u=>u.email===email)){
    showMsg("이미 가입된 이메일입니다.");
    return;
  }

  users.push({name,email,password});
  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("currentUser",email);

  window.location.href="../community.html";
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href="auth/login.html";
}

function showMsg(text){
  document.getElementById("msg").innerText=text;
}
