import React from 'react';

function Admin() {
    return (
        <div className="container">
            <form>
                <h1>Register as an admin</h1><br/>
                <div className="form-group row">
                    <label htmlFor="inputState" className="col-sm-2 col-form-label">State</label>
                    <div className="col-sm-10">
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Mr.</option>
                            <option>Ms.</option>
                            <option>Mrs.</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control" id="inputName" placeholder="Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control" id="inputAddress" placeholder="Address"/>
                    </div>
                </div>
                <div className="form-group row"> {/* Birthday field wrapped in a form-group row */}
                    <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday</label>
                    <div className="col-sm-10">
                        <input type="date" id="birthday" name="birthday" className="form-control"/> {/* Added form-control class */}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Admin;
