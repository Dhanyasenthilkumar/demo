import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CRUD() {

  const navi = useNavigate();
  const data ={
    Name:"",
    Phone:"",
    Age:""
  }

  const [Name, Setname] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Age, SetAge] = useState("");


  function handleCreate(e) {
    e.preventDefault();
    axios.post('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark', {
      SetName: Name,
      SPhone: Phone,
      SAge: Age
    })

      .then(() => {
        alert("Data Created");
        SetPhone("");
        SetAge("");
        Setname("");
        navi("/");

      })
      .catch((error) => { console.log(error); })
  }
  // get
  const [view, setView] = useState([]);

  useEffect(() => {
    axios.get('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark')
      .then((res) => { setView(res.data) })
      .catch((error) => { console.log(error); })
  }, [view])


  // const [edit,setEdit] = useState(false)

//update

// function handleUpdate(e) {
//   e.preventDefault()
//   const id = localStorage.getItem("editId");

//   axios.put('https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark/' + id, {
//     SName: Name,
//     SPhone: Phone,
//     SAge: Age
//   })
//     .then(() => {
//       alert("Data Updated");
//       setEdit(false);
//       localStorage.clear()
//       SetPhone("");
//       SetAge("");
//       Setname("");
//       navi("/");
//     })
//     .catch((error) => { console.log(error); })
// }



return (
  <div className='container text-center'>



    <form action="" onSubmit={
      // edit ?
        // handleUpdate :
        handleCreate

    } className='card mx auto p-4' style={{ width: "30rem" }}>
      <label htmlFor="" className="form-label">Name</label>
      <input type="text" value={Name} onChange={(e) => { Setname(e.target.value) }} className='form-control' name="" id="" />

      <label htmlFor="form label">Phone</label>
      <input type="phone" value={Phone} onChange={(e) => { SetPhone(e.target.value) }} className="form-control" name="" id="" />

      <label htmlFor="form label">Age</label>
      <input type="age" value={Age} onChange={(e) => { SetAge(e.target.value) }} className='form-control' name="" id="" />

      <button type="submit" className="btn btn-primary mt-3">
        SUBMIT
      </button>


    </form>
    <h1>
      Name:{Name.Name} <br />
      Age:{Age.Age} <br />
      Phone:{Phone.Phone}
    </h1>

    <table className='table'>
      {/* <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          view.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.SetName}</td>
                <td>{item.SetPhone}</td>
                <td>{item.SAge}</td>
                <td></td>
              </tr>
            )
          })
        }


      </tbody> */}
    </table>
  </div>
  )
}