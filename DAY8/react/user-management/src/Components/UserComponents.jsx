import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Usercomponents = () => {
  const [users, setUsers] = useState([{}]);

  const fetchDataHandler = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    let data = await response.json();
    setUsers(data);
    console.log("Users information", users);
  };

  const deleteData = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  {/* <button onClick={() => deleteData(user.id)}>Delete</button> */}
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteData(user.id)} style={{cursor: "pointer",color: "red"}}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Usercomponents;