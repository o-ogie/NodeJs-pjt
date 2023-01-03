document.addEventListener('DOMContentLoaded',()=>{
    if (document.cookie==='') {
        alert('비정상적인 접근입니다.')
        location.href='/'
        // history.go(-1)
    }
})