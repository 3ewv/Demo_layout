
import { laydsuser} from "./module.js";




export async function check_user(First_Name, Email, Choose_a_password, Confirm_password, type) {
    let users =  await laydsuser();
  
   users.forEach((element) => {
   
    if (element.First_Name == First_Name && element.email == Email && element.choose_a_password == Choose_a_password && element.confirm_password == Confirm_password && element.type ==type) {
      if (type=="student") {
          sessionStorage.setItem("user", JSON.stringify(element));
          window.location.href = `../html/profile/student.html?id=${element.id}`;
        }else if(type=="university"){
          sessionStorage.setItem("user", JSON.stringify(element));
          window.location.href = `profile_university.html?id=${element.id}`;
        }else{
          sessionStorage.setItem("user", JSON.stringify(element));
          window.location.href = `profile_employed.html?id=${element.id}`;
        }

    }
  });
   
  }
  