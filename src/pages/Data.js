import { element } from 'prop-types';
import Logo from '../assets/logo512.png'

function Data(props) {

    const name =[{name:"hello", email:"hello@gmail.com"},{name:"my name", email:"name@gmail.com"},{name:"khabn", email:"khan@gmail.com"}
]
  return (
    <div>
      <h1>Data of the employee</h1>
      <div className="grid grid-cols-4 gap-4 ">
            <div>
            <img src={props.img} alt="" />
               <table>
                <tr>
                    <td className='col-2'>name</td>
                    <td>email</td>
                </tr>
                {
                    name.map((element) =>{
                        return(
                            <div>
                            <td className='col-2'>
                            {element.name}

                            </td>
                            <td>{element.email}</td>
                            </div>
                        )
                    })
                }
               </table> 

            </div>
      </div>
    </div>
  );
}

export default Data;
