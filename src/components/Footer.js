

function Footer()
    

{
   const user = true;
    return(
        <div className="w-[full] bg-yellow-600 h-screen text-center p-3 text-xl">
        // <h3 className="text-blue-600 text-5xl font-bold text-center">Footer</h3>
            <div className="input-group">
                
              {
               (()=>{

                if(user)
                {
                  return(
                    <h1>you are logged In</h1>
                  )
                }
                else{
                  return(
                    <h1>please login or sign up</h1>
                  )
                }


               })()
              }

            </div>
        </div>
    )
}
export default Footer;