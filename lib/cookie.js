function getCookie(name) {         //封装  getCookie  拿到name 对应的  value
    let arr = document.cookie.split('; ') //分割 每个 name不一样的 cookie  返回数组
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let tampArr = arr[i].split('=')   //利用'='分割 cookie  的 name  和value  返回数组
        // console.log(tampArr)
        if (tampArr[0] == name) {
            // console.log(tampArr[1])
            return tampArr[1]
        }
    }
    return null
}

function setCookie(name,value,day=7){          //封装  setCookie  设置一个cookie
    let now = new Date()
    now.setDate(now.getDate()+day)
    let str = `${name}=${value};expires=${now};path=/`
    document.cookie = str
}

function removeCookie(name){
    return setCookie(name,'',-10)
}