const signinbtn = document.querySelector('#signin')
const signupbtn = document.querySelector('#signup')
const msgerro1 = document.querySelector('#msgerro1')
const msgerro2 = document.querySelector('#msgerro2')
const userInput = document.querySelector('#user')
const senhaInput = document.querySelector('#senha')
const cadastrebtn = document.querySelector('#cadastre')
console.log(signinbtn)
let info = []

function show(event){
    event.preventDefault()
    
    const user = document.querySelector('#user').value
    const senha = document.querySelector('#senha').value
    if(user == "" || senha == ''){
        if(user == ''){
            msgerro1.innerHTML = 'Digite seu nome de usuário'
            userInput.style.border = '2px solid red'
        }
        else{
            msgerro1.innerHTML = ''
            userInput.style.border = 'none'
        }
        if(senha == ''){
            msgerro2.innerHTML ='Digite sua senha'
            senhaInput.style.border = '2px solid red'
        }
        else{
            msgerro2.innerHTML = ''
            senhaInput.style.border = 'none'
        }
    }
    else if(info.length > 0 && user == info[1] && senha == info[2] ){
        const sucesso = document.querySelector('#resultado')
        const login = document.querySelector('#inicio')
        login.style.display = 'none'
        sucesso.innerHTML = info[0]+ ', seu login foi realizado com sucesso!'
        sucesso.style.display = 'flex'
        
    }

}

function showcadastro(event){
    event.preventDefault()
    const cadastro = document.querySelector('#cadastro')
    const login = document.querySelector('#inicio')
    login.style.display = 'none'
    cadastro.style.display = 'flex'
    
    
}

function cadastre(event){
    event.preventDefault()
    const nomeInput = document.querySelector('#nome')
    const usercadastroInput = document.querySelector('#usercadastro')
    const senhacadastroInput = document.querySelector('#senhacadastro')
    const nome = document.querySelector('#nome').value
    const usercadastro = document.querySelector('#usercadastro').value
    const senhacadastro = document.querySelector('#senhacadastro').value
    const errocadastro1 = document.querySelector('#errocadastro1')
    const errocadastro2 = document.querySelector('#errocadastro2')
    const errocadastro3 = document.querySelector('#errocadastro3')
    if(usercadastro == ''|| senhacadastro == '' || nome == ''){
        if(nome == ''){
            errocadastro1.innerHTML = 'Digite seu nome'
            nomeInput.style.border = '2px solid red'
        }
        if(usercadastro== ''){
            errocadastro2.innerHTML = 'Digite o seu e-mail'
            usercadastroInput.style.border = '2px solid red'
        }
        if(senhacadastro== ''){
            errocadastro3.innerHTML = 'Crie sua senha'
            senhacadastroInput.style.border = '2px solid red'
        }
    }
    else if(!usercadastro.includes('@') || !usercadastro.includes('.com')){
        errocadastro1.innerHTML = ''
        nomeInput.style.border = 'none'
        errocadastro2.innerHTML = 'Digite um email válido'
        usercadastroInput.style.border = '2px solid red'
    }
    else if(senhacadastro.length !=8){
        errocadastro2.innerHTML = ''
        usercadastroInput.style.border = 'none'
        errocadastro3.innerHTML ='Sua senha deve ter no mínimo 8 caracteres'
        senhacadastroInput.style.border = '2px solid red'
    }
    else{
        info = [nome,usercadastro,senhacadastro]
        const cadastro = document.querySelector('#cadastro')
        const login = document.querySelector('#inicio')
        cadastro.style.display = 'none'
        login.style.display = 'flex'
        
        
        
    }

}


signinbtn.addEventListener('click', show)
signupbtn.addEventListener('click', showcadastro)
cadastrebtn.addEventListener('click', cadastre)