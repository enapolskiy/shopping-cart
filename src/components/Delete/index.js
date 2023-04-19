const Delete = ({deleteProduct, id}) => {
    return ( 
        <button type="button" onClick={()=>{deleteProduct(id)}}>
            <img src="../img/icons/cross.svg" alt="Delete"></img>
        </button>
     );
}
 
export default Delete;