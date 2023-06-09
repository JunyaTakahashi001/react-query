import { useState, useEffect } from 'react';

/**
 *useQueryを使用しない場合
 */

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;