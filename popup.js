const addButton = document.querySelector('#addPopup');
const mainSection = document.querySelector('main');

const createBox = () => {
    const newBox = document.createElement('div');
    newBox.classList.add('pop-up');
    document.body.appendChild(newBox);   
}

const removePopUp = () => {
    const newBox = document.querySelector('.pop-up');

    newBox.classList.add('remove')
        newBox.addEventListener('animationend', () => {
            newBox.remove();
        }); 
}

const addBoxHandler = () => {
    const newBox = document.querySelector('.pop-up')
    
    if (newBox == null) {
        createBox();
        mainSection.classList.add('blacked');
    } else {
        removePopUp();
        mainSection.classList.remove('blacked');
    }
}

const remove = () => {
    const newBox = document.querySelector('.pop-up');
    
    newBox.addEventListener(
        'click',
        () => {
            removePopUp();
            mainSection.classList.remove('blacked');
        }
    )
}

addButton.addEventListener(
    'click',
    () => {
        addBoxHandler();
        remove();
    }
)

