const USERS = [
    {
        inputName: 'لیلا',
        inputPass: '123'
    },
    {
        inputName: 'اصغر',
        inputPass: '456'
    },
    {
        inputName: 'صغری',
        inputPass: '789'
    }
];

const paragragh = document.createElement('p');

const greeting = document.getElementById('greeting');
const logout = document.getElementById('loguot');

const user = document.getElementById('InputName1');
const pass = document.getElementById('InputPassword1');

const btn = document.getElementById('btn');




btn.addEventListener('click', (e) => {
    e.preventDefault();
    paragragh.innerText = '';
    document.body.appendChild(paragragh);
    let i = 0;

    USERS.map(el => {

        if (user.value === el.inputName && pass.value === el.inputPass) {

            window.localStorage.setItem('userName', JSON.stringify(user.value));
            user.value = '';
            pass.value = '';

            if (JSON.parse(window.localStorage.getItem('userName')) !== null) {
                const userName = JSON.parse(window.localStorage.getItem('userName'));

                paragragh.innerText = `${userName} جان، خوش آمدید`;
                document.body.appendChild(paragragh);

            } else {
                paragragh.innerText = ` شما هنوز وارد نشده اید`;
                document.body.appendChild(paragragh);
            }

        }
        else {
            i++;
        }
    })

    if (i === 3) {
        paragragh.innerText = `ابتدا اطلاعات خود را به شکل صحیح وارد نمایید`;
        document.body.appendChild(paragragh);
    }
});




logout.addEventListener('click', () => {

    window.localStorage.removeItem('userName');
    paragragh.innerText = '';
    paragragh.innerText = ` شما با موفقیت خارج شدید`;
    document.body.appendChild(paragragh);
    user.value = '';
    pass.value = '';
    logout.style.
});