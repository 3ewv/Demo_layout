export const writeting_data= async (university_name, representative_name, title_of_tepresentative, email, address, choose_a_password, confirm_password,type) =>{
    const user = await {
        university_name, representative_name, title_of_tepresentative, email, address, choose_a_password, confirm_password,type
    }
    console.log(user);
    const update_data_user = await{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(update_data_user);
    return await fetch('http://localhost:3000/user',update_data_user)
            .then(res => res.json())
            .then(d=>d);
} 