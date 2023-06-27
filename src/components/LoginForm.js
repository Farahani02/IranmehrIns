const LoginForm = () => {
    return (
        <div className="card shadow-lg">
            <div className="card-header">
                وارد شدن
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">ایمیل</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">اطلاعات شما محفوظ خواهند ماند.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">رمز ورود</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;