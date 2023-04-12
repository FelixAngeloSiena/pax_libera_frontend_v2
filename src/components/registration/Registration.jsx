import '../../assets/css/Registration.css'

function Registration() {

    return (
        <body className="registrationBody">
            <div className="registrationContainer">
                <h1 class="createAcc">Create an account</h1>
                <h2 class="alreadyAcc">Already have an account? <span id="signInSpan">Sign in</span></h2>
                <div class="RegistrationInput">
                    <form id="createAccForm">
                        <div>
                            <select required name="department">
                                <option disabled={true} selected hidden value="">
                                    Department
                                </option>
                                <option value="department1">Department1 </option>
                                <option value="department2">Department2 </option>
                                <option value="department2">Department3 </option>
                            </select>
                        </div>
                        <div>
                            <select required name="role">
                                <option disabled={true} selected hidden value="">
                                    Role
                                </option>
                                <option value="role1">Role1 </option>
                                <option value="role2">Role2 </option>
                                <option value="role3">Role3 </option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder="Name" name="username" />
                        </div>
                        <div>
                            <input type="text" placeholder="E-mail Address" name="email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" name="password" />
                        </div>
                    </form>
                    <button class="button" type="submit" form="createAccForm" value="Submit">Create Account</button>

                </div>
            </div>
        </body>
    );
}

export default Registration;