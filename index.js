const submitbtn = document.querySelector('.submitbtn')
const rateModal = document.querySelector('#rateModal')
const thankyouModal = document.querySelector('#thankyouModal')

rateModal.showModal()


const ratebtns = document.querySelector('.ratingbtns')

ratebtns.addEventListener('click', ev => {
    if (ev.target.nodeName === "BUTTON") {
        const test = document.querySelectorAll('.btn')
        
        test.forEach(element => {
            element.classList.remove('clicked')
        });
        // so that there's only one active button
        
        const cbtn = ev.target
        cbtn.classList.add ('clicked')
    }
} )


submitbtn.addEventListener('click', () => {
    try {
        const cbtn = document.querySelector('.clicked');
        const rating = cbtn.innerText;
        const result = document.querySelector('#result p');
        result.innerText = `You selected ${rating} out of 5`;
        rateModal.close();
        thankyouModal.showModal();
    } catch (error) {
        rateModal.close();
        thankyouModal.showModal();
    }

    console.log('testing123')
    


})


const test = document.querySelector('#rateModal')
console.log(test)