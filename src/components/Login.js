import React from ' react ';

const Login = () => {
return(
    <div className="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
                <a href="/"><b>Cloud</b>Sales</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form >
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" name="username" placeholder="apodo"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">s
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary"><i className="fa fa-sign-in"></i>Acceder</button>
                                </div>
                            </div>
                        </form>
                        <div className="alert-danger d-none" role="alert">
                            <strong>Error!</strong>
                            <p id="reason"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}