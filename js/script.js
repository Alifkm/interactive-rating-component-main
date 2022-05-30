const btnWrapper = document.querySelectorAll("#wrapper-number button");

const btnSubmit = document.querySelector('.submit-button');

btnWrapper.forEach(button => {
    button.addEventListener('click', function () {
        btnWrapper.forEach(btn => btn.style.backgroundColor = null);
        btnWrapper.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        this.style.backgroundColor = 'hsl(216, 12%, 54%)';    
        this.style.color = 'white';
        console.log(document.querySelector('.wrapper-number').innerHTML);
    });
});



if(btnSubmit) {
    btnSubmit.addEventListener('click', function() {
        const rating = document.querySelector('.active');

        if(!rating) {
            alert('You have to choose!');
        }else {
            document.querySelector('.selected-number').innerHTML = rating.innerHTML;

            const mainWrapper = document.querySelector('.wrapper-content');
            mainWrapper.style.display = 'none';
            
            const thankyouWrapper = document.querySelector('.wrapper-thankyou');
            thankyouWrapper.style.display = 'flex';
            thankyouWrapper.style.alignItems = 'center';
            thankyouWrapper.style.justifyContent = 'center';
            thankyouWrapper.style.flexDirection = 'column';
        }

    });
}