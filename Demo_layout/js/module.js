
export const laydsuser =()=>{
    return fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(d=>d);
}



export const add_data = async (University_Name,Company_Name,First_Name,representative_name,title_of_Representative,email,address,choose_a_password,confirm_password,Job) =>{
    const data_tk = await{
        University_Name,Company_Name,First_Name,representative_name,title_of_Representative,email,address,choose_a_password,confirm_password,Job
    }
  
    const update_data_tk = await{
        method: 'POST',
        body: JSON.stringify(data_tk),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(update_data_tk);
    return await fetch('http://localhost:3000/user', update_data_tk)
        .then(res => res.json())
        .then(d => {
            console.log(d);
            window.location.href="demo_login.html";
            return d;
        });

}