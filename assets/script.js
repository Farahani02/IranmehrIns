const USER = 'user1';
const PASSWORD = '1234';

const USERS = [
    {
        inputName: 'user1',
        inputPass: '123'
    },
    {
        inputName: 'user2',
        inputPass: '456'
    },
    {
        inputName: 'user3',
        inputPass: '789'
    }
]

const greeting = document.getElementById('greeting');
const logout = document.getElementById('loguot');

const user = document.getElementById('InputName1');
const pass = document.getElementById('InputPassword1');

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    USERS.map(el => {

        if (user.value === el.inputName && pass.value === el.inputPass) {

            window.localStorage.setItem('userName', JSON.stringify(user.value));
            // console.log('success!');
        }
    })
})

greeting.addEventListener('click', () => {

    if (JSON.parse(window.localStorage.getItem('userName')) !== null) {
        const userName = JSON.parse(window.localStorage.getItem('userName'));
        const paragragh = document.createElement('p');
        paragragh.innerText = `${userName} ی عزیز خوش آمدید`;
        document.body.appendChild(paragragh);
        // console.log('خوش آمدی')
    } else {
        const paragragh = document.createElement('p');
        paragragh.innerText = ` شما هنوز وارد نشده اید`;
        document.body.appendChild(paragragh);
        // console.log('هنوز وارد نشدی')
    }

})


logout.addEventListener('click', () => {

    window.localStorage.removeItem('userName');

    const paragragh = document.createElement('p');
    paragragh.innerText = ` شما با موفقیت خارج شدید`;
    document.body.appendChild(paragragh);
})





// const clickHandler = () => {

//     const uname = 'لیلا';
//     const upass = '1234';

//     const inputname = document.getElementById('exampleInputName1');
//     const inputpass = document.getElementById('exampleInputPassword1');
//     // console.log(inputname.value);

//     if (inputname.value === uname && inputpass.value === upass) {
// console.log('nnnnnnnn');
// inputname.value = '';
// inputpass.value = '';
// alert(`${uname} ی عزیز خوش آمدی`);
// btn.innerHTML = <a href="../login.html">ورود</a>

// }
//  else if (inputname.value !== uname && inputpass.value === upass) {
//     inputname.value = '';
//     alert('نام کاربری شما نادرست است.');
// } else if (inputname.value === uname && inputpass.value !== upass) {
//     inputpass.value = '';
//     alert('رمز ورود شما نادرست است.');

// }
// else if (inputname.value === inputpass.value) {
//     alert('لطفا اطلاعات را کامل کنید');
// }
// else if (inputname.value !== uname && inputpass.value !== upass) {
//     alert('نام کاربری و رمز ورود شما نادرست است.');
//     inputname.value = '';
//     inputpass.value = '';
// }

// }
