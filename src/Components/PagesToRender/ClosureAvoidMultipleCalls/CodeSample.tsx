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
  return new Promise<userInterface>((resolve) =>
    setTimeout(() => resolve(users[id]), 3000)
  );
};

function User({
  id,
  pushElement,
}: {
  id: string;
  pushElement: (newElement: string) => void;
}) {
  const [userData, setUserData] = useState<userInterface | null>(null);

  useEffect(() => {
    setUserData(null);

    let cancelled = false;

    pushElement(`Fetch data for user ${id}`);
    fetchUser(id).then((data: userInterface) => {
      cancelled
        ? pushElement(`Received stale data for user ${id}`)
        : (pushElement(`Received data for user ${id} ${JSON.stringify(data)}`),
          setUserData(data));
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

export default (props: { pushElement: (newElement: string) => void }) => {
  const [id, setId] = useState<string>('1');

  return (
    <div>
      <select onChange={(e) => setId(e.target.value)}>
        <option value={1}>Fetch user 1</option>
        <option value={2}>Fetch user 2</option>
      </select>
      <User id={id} pushElement={props.pushElement} />
    </div>
  );
};
