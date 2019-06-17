import React, { Component } from 'react';
import styled from 'styled-components';
import firebaseConf from './Firebase';

import { darkBlue, yellow } from '../../utilities';

class Contacts extends Component {
  state = {
      form: [],
      alert: false,
      alertData: {}
    };

  showAlert(message) {
    this.setState({
      alert: true,
      alertData: { message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  sendMessage = (e) => {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    if (params.name && params.email && params.message) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('Your message was sent successfull');
      }).catch(() => {
        this.showAlert('Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('Please fill the form');
    };
  }

  render() {
    return (
      <>  
        <ContactsWrapper>
          <FormWrapper>
            <StyledTitle>Have a
              <span> question </span>or want to
              <span> work together </span>
              ?
            </StyledTitle>
            <form onSubmit={this.sendMessage} ref='contactForm'>
              <StyledDiv>
                <label htmlFor="name">Name :</label>
                <input autoComplete= "off" type="text" id="name" placeholder="Your Name" ref={name => this.inputName = name}/>
              </StyledDiv>
              <StyledDiv>
                <label htmlFor='exampleInputEmail1'>Email :</label>
                <input autoComplete= "off" type='email' id='email' placeholder='Your Email Adress' ref={email => this.inputEmail = email} />
              </StyledDiv>
              <StyledDiv>
                <label htmlFor='phone'>Phone :</label>
                <input autoComplete= "off" type='number' id='phone' placeholder='Your Phone Number' ref={phone => this.inputPhone = phone} />
              </StyledDiv>
              <StyledDiv>
                <label htmlFor='message'>Message :</label>
                <input autoComplete= "off" type="text" id='message' placeholder='Your Message' ref={message => this.textAreaMessage = message} />
              </StyledDiv>
              {this.state.alert && <div>
                <StyledAlert>
                  {this.state.alertData.message}
                </StyledAlert>
              </div>}
              {!this.state.alert && <button type='submit'>Send</button>}
            </form >
          </FormWrapper>
        </ContactsWrapper>
      </>
    );
  }
}

export default Contacts;

const ContactsWrapper = styled.div`
  background-color: ${darkBlue};
  display: grid;
  grid-template-columns: 50% 50%; 
  grid-template-rows: auto;
  color: white;
  padding: 50px 30px;
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;

  & span {
    color: ${yellow};
    font-weight: 800;
    font-size: 30px;
  }
`;

const FormWrapper = styled.div`
  grid-row: 1, 2;

  & input {
    padding-left: 10px;
    border: none;
    outline: none;
    background: none;
    color: white;
    width: 80%;
    font-family: "Poppins", sans-serif;
  }

  & input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
  }

  & input {
    font-size: 16px;
  }

  & button {
    margin-top: 20px;
    background: none;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    font-family: "Poppins", sans-serif;
    padding: 4px;
  }

  & button:hover {
    color: ${darkBlue};
    background-color: ${yellow};
    border: 1px solid ${yellow};
  }
`;

const StyledDiv = styled.div`
  padding: 5px 0;
  overflow: hidden;
  font-size: 20px;
  border-bottom: 1px solid white;
  color: ${yellow};
`;

const StyledAlert = styled.div`
  margin-top: 20px;
  color: ${yellow};
  font-family: "Poppins", sans-serif;
  text-align: center;
  border-bottom: 1px solid transparent;
  padding: 4px;
`;