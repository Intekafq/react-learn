function NewM( props)
{
    return(
            <div>
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 border-red-600">
  <img className="w-full" src={props.img }alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
     {props.desc}
    </p>
    <p>Price : {props.price}$</p>
      <p>Rating : {props.rating}</p>  
  </div>
  <div className="px-6 pt-4 pb-2 flex flex-wrap flex-col">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.discountPercentage} % discount</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.brand}</span> 
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.category}</span>
  </div>
</div>
            </div>
    )
}

export default NewM;