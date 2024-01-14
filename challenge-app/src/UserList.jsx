function UserList({ users }) {
  return (
    <div className="users">
      <h2 className="users__title">User List</h2>
      <div className="users__cards">
        {users.map((user) => {
          return (
            <div className="users__card" key={user.id}>
              <h3>{user.name}</h3>
              <p>UserName:{user.username}</p>
              <p>Email:{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
