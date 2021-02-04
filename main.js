const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

nextBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('next');
    })
})
prevBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('previous');
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll('input').forEach(input => {
        const {name, value} = input;
        inputs.push({name, value});
    })
    form.reset();
    changeStep('submit');
    console.log(inputs);
})

function changeStep (btn) {
    let index = 0;
        const active = document.querySelector('form .step.active');
        index = steps.indexOf(active);
        steps[index].classList.remove('active');
        if (btn === 'next'){
            index ++;
        } else if (btn === 'previous'){
            index --;
        } else if (btn === 'submit'){
            index = 0;
        }
        steps[index].classList.add('active');
}
