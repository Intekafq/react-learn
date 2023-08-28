

function News(props)
{
    return (
        <div className="App">
        <p>{props.data}</p>
        <table className="table-auto">
        <thead>
        <tr>
      <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        </tr>
        </thead>
        <tbody>
       
       <tr>
       <td>{props.name}</td>
       <td>{props.email}</td>
       <td>{props.contact}</td>
       </tr>
       </tbody>
     
        </table>
        </div>
    )

   

}
export default News;