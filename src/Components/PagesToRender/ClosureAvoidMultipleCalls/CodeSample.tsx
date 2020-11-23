import React, { useState, useEffect } from 'react';

interface userInterface {
  name: string;
  age: number;
}
interface usersInterface {
  [key: string]: userInterface;
}
const users: usersInterface = {
  1: { name: 'Mary', age: 75 },
  2: { name: 'Susan', age: 34 },
};

const fetchUser = (id: string) => {
  console.log('Fetch data for user', id);
  return new Promise<userInterface>((resolve) =>
    setTimeout(() => resolve(users[id]), 3000)
  );
};

function User({ id }: { id: string }) {
  const [userData, setUserData] = useState<userInterface | null>(null);

  useEffect(() => {
    setUserData(null);

    let cancelled = false;

    fetchUser(id).then((data: userInterface) => {
      if (cancelled) {
        console.log('Received stale data for user', id);
      } else {
        console.log('Received data for user', id, data);
        setUserData(data);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div>
      {userData ? (
        <span>
          {userData.name} is {userData.age} years old
        </span>
      ) : (
        'loading...'
      )}
    </div>
  );
}

export default () => {
  const [id, setId] = useState<string>('1');

  return (
    <div>
      <select onChange={(e) => setId(e.target.value)}>
        <option value={1}>Fetch user 1</option>
        <option value={2}>Fetch user 2</option>
      </select>
      <User id={id} />
    </div>
  );
};
