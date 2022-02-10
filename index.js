document.body.style.backgroundColor = 'lightblue'
document.getElementById('button').addEventListener('click',function(){
    const inputEmail = document.getElementById('input-email');
    const inputPassward = document.getElementById('input-passward');
    
    if(inputEmail.value == 'tanjinhossain2003@gmail.com'){
        if(inputPassward.value == '01861557343'){
            window.location.href = "realbank.html"
            // console.log('ksdjfksag')
        }
    }
})