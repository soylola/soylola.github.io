(function(){
    const sliders = [...document.querySelectorAll('.proyectos__body')];

    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    


    
    const changePosition = (add)=> {
        const currentProyecto = document.querySelector('.proyectos__body--show').dataset.id;
        value = Number(currentProyecto);
        value+= add;

        sliders[Number(currentProyecto)-1].classList.remove('proyectos__body--show');

        if(value === sliders.length+1 || value === 0){
            value= value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('proyectos__body--show');


        console.log(value);
    }


})();