document.addEventListener('DOMContentLoaded',()=>{
    if (document.cookie.split('=')[1]==='') {
        alert('비정상적인 접근입니다.')
        location.href='/'
        // history.go(-1)
    }
    console.log(typeof document.cookie.split('=')[1])
})
