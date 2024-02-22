
import { laydsuser,add_data } from "./module.js";

export async function form(University_Name,Company_Name,First_Name,representative_name,title_of_Representative,email,address,choose_a_password,confirm_password,Job){
   add_data(University_Name,Company_Name,First_Name,representative_name,title_of_Representative,email,address,choose_a_password,confirm_password,Job);
  
   
}



export async function check_user(User_Name, Email, Choose_a_password, Confirm_password, Job) {
    let users =  await laydsuser();
  
    users.forEach((element) => {
      if (element.name == User_Name &&element.email == Email && element.choose_a_password == Choose_a_password &&element.confirm_password == Confirm_password &&element.type == Job) {
        if (Job=="Student") {
            sessionStorage.setItem("user", JSON.stringify(element));
            window.location.href = `profile_student.html?id=${element.id}`;
          }else if(Job=="University"){
            sessionStorage.setItem("user", JSON.stringify(element));
            window.location.href = `profile_university.html?id=${element.id}`;
          }else{
            sessionStorage.setItem("user", JSON.stringify(element));
            window.location.href = `profile_employed.html?id=${element.id}`;
          }
      }
    });
  }
  