import React, { useRef } from 'react';

export default function ControlForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit', {
      username: usernameRef.current.value,
      passwordRef: passwordRef.current.value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={'username'}>Username: </label>
      <input id={'username'} type={'text'} ref={usernameRef} />
      <label htmlFor={'Password'}>Password: </label>
      <input id={'Password'} type={'password'} ref={passwordRef} />
      <button type={'submit'}>Submit</button>
    </form>
  );
}
