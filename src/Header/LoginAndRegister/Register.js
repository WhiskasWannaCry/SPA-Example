import React, {useState} from "react";
import "./LogAndReg.css"

let imgAvatar;
let imgBackground;
let userIdCount = 2;

const Register = ({re,inputEmail,setInputEmail,inputPass,setInputPass,users,setUsers,setAuthUser}) => {
  const [repeatPass, setRepeatPass] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputSurname, setInputSurname] = useState('')

  const showRegister = () => {
    return document.getElementById('register_modal_background').style.display = "flex";
  }

  const hideRegisterModal = () => {
    document.getElementById('register_modal_background').style.display = "none";
  }

  const userRegisterValidation = () => {
    const guestImg = "data:image/png;base64,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"
    const usersCopy = users.slice();
    if(!inputName||!inputSurname) {
      alert("All fields must be filled.")
    }
    else if(inputPass != repeatPass) {
      alert("Passwords do not match.")
    }
    else if(!re.test(String(inputEmail).toLowerCase())) {
      return alert("Entered e-mail is incorrect.")
    }
    else if(usersCopy.findIndex(user => user.email === inputEmail)!=-1) {
      alert("Entered e-mail is already registered!")
    }
    else {
      const newUser = {id:userIdCount, name:inputName, email:inputEmail, surname: inputSurname, password:repeatPass}
      imgAvatar?newUser.image = imgAvatar: newUser.image = guestImg;
      usersCopy.push(newUser)
      setUsers(usersCopy)
      setAuthUser(usersCopy[usersCopy.length-1])
      userIdCount++
      setInputEmail("")
      setInputName("")
      setInputSurname("")
      setInputPass("")
      setRepeatPass("")
      hideRegisterModal()
    }
  }

  function downloadImage(e) {
    let file = e.target.files[0];
      if(file!=undefined){
      const reader= new FileReader();
      reader.onload=function(){
      imgAvatar = this.result;
      };
      reader.readAsDataURL(file);
      }
  }

  return (
    <div>
      <button onClick={showRegister} className="register_btn">Register</button>
      <div className="register_modal_background" id="register_modal_background">
            <div className="register_modal_container">
              <span className="modal_exit" onClick={hideRegisterModal}>x</span>
              <span className="modal_title"><b>Please, enter Your email, password and repeat password</b></span>
              <div className="modal_inputs">
                <div className="modal_name_and_surname_inputs">
                  <span className="modal_name_surname">
                    <span className="modal_input_desc">Name:*</span>
                    <input className="modal_input_name"
                      value={inputName}
                      onChange={e => setInputName(e.target.value)}
                      placeholder="Ivan"></input>
                  </span>
                  <span className="modal_name_surname">
                    <span className="modal_input_desc">Surname:*</span>
                    <input className="modal_input_surname"
                      value={inputSurname}
                      onChange={e => setInputSurname(e.target.value)}
                      placeholder="Ivanov"></input>
                  </span>
                </div>
                <span className="modal_inputs_name">E-mail*:</span>
                <input 
                  value={inputEmail}
                  onChange={e => setInputEmail(e.target.value)}
                  className="modal_input_email" 
                  placeholder="ivanivanov@mail.com"></input>
                <span className="modal_inputs_name">Password*:</span>
                <input 
                  onChange={e => setInputPass(e.target.value)}
                  value={inputPass}
                  className="modal_input_password"
                  placeholder="Enter Your password"></input>
                <span className="modal_inputs_name">Repeat password*:</span>
                <input 
                  onChange={e => setRepeatPass(e.target.value)}
                  value={repeatPass}
                  className="modal_input_password"
                  placeholder="Repeat Your password"></input>
                <input type="file" onChange={e => downloadImage(e)}></input>
              </div>
              <button onClick={userRegisterValidation} className="modal_login_btn"><b>Sign Up</b></button>
            </div>
          </div>
    </div>
  )
}

export default Register;