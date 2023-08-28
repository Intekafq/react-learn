import Table from 'react-bootstrap/Table';
function DummyData(props)
{
    return(
            <div className="App font-bold">
                   
                    <Table striped="columns">
                   
                    <tbody>

                      <tr>
                        <td>1</td>
                        <td>{props.firstName}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      
                    </tbody>
                  </Table>
            </div>
    )
}

export default DummyData;