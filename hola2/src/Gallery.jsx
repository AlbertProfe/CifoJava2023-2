import generateEmail from './GenerateEmail'

export default function Gallery() {
  const maqueda = 'Hey maqueda how are you?';

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  const a = 3;

  const email = generateEmail('Marc');


  return (
    <>
     <h2>Sandbox data</h2>
      <p>{maqueda} Fine thanks </p>
      <p><strong>email: </strong> {email}  </p>

      <h2>Items</h2>
       {items.map(item => (
        <div >{item.name}</div>
      ))}
      
      <h2>Amazing scientists</h2>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <p>Working hard for sciende always pay back!</p>
      <p>By the way, how are you, Ruben?</p>
    </>
  );
}


function Profile() {

  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}