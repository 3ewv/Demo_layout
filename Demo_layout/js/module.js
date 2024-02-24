
export const laydsuser =()=>{
    return fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(d=>d);
}

export const add_data = async (formDataObject) => {
   
  
    const update_data_tk = {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch('http://localhost:3000/user', update_data_tk)
        .then(res => res.json())
        .then(d => d);
};

export const update = async (object,id) => {
    const update_data_tk =  await{
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await fetch(`http://localhost:3000/user/${id}`, update_data_tk)
    .then(res => res.json())
    .then(d => d);


}
    
    
