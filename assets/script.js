const clickHandler = () => {

    const uname = 'لیلا';
    const upass = '1234';

    const inputname = document.getElementById('exampleInputName1');
    const inputpass = document.getElementById('exampleInputPassword1');
    // console.log(inputname.value);

    if (inputname.value === uname && inputpass.value === upass) {
        // console.log(upass);
        inputname.value = '';
        inputpass.value = '';
        alert(`${uname} ی عزیز خوش آمدی`);
        // btn.innerHTML = <a href="../login.html">ورود</a>

    } else if (inputname.value !== uname && inputpass.value === upass) {
        inputname.value = '';
        alert('نام کاربری شما نادرست است.');
    } else if (inputname.value === uname && inputpass.value !== upass) {
        inputpass.value = '';
        alert('رمز ورود شما نادرست است.');

    }
    else if (inputname.value === inputpass.value) {
        alert('لطفا اطلاعات را کامل کنید');
    }
    else if (inputname.value !== uname && inputpass.value !== upass) {
        alert('نام کاربری و رمز ورود شما نادرست است.');
        inputname.value = '';
        inputpass.value = '';
    }

}
const btn = document.getElementById('btn');
btn.addEventListener('click', clickHandler);