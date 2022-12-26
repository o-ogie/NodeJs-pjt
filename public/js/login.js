const form = document.querySelector("form")
const user = documnet.querySelector("input[type=text]")
const pass = document.querySelector("input[type=password]")
const xhr = new XMLHttpRequest()

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    xhr.open("post","http://localhost:3000/user/login")
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    console.log(user_id.value , user_pw.value)
    xhr.send(`user_id=${user.value}&user_pw=${pass.value}`)

    xhr.addEventListener("readystatechange",(e)=>{
        const {target} = e;
        if(xhr.readyState === 4){
            if(target.response === "아이디와 비밀번호가 일치하지 않습니다."){
                alert(target.response)
            }else{
                location.href = "/"
            }
        }
    })
})