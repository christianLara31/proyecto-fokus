const html = document.querySelector('html')
const botonCorto =  document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('app__card-button--enfoque')

botonCorto.addEventListener('clic' , () => {
    html.setAttribute('data-contexto' , 'descanso-corto')
})

botonEnfoque.addEventListener('clicl' , () =>{
    html.setAttribute('data-contexto' , 'enfonque')
})