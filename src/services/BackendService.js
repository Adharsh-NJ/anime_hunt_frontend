import axios from 'axios'



export const signIn=async (data)=>{
    try {
        let resp = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/user/signin`, {
          
                "email":data.email,
                "password":data.password,

        });
        localStorage.setItem("token",resp.data.token)
        return resp;
      } catch (error) {
        console.log("Error: " + error);
        return error;
      }

}

export const signUp=async (data)=>{
    try {
        let resp = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/user/signup`, {
                "firstName":data.firstName,
                "lastName":data.lastName,
                "email":data.email,
                "password":data.password,
                
        });
        return resp;
      } catch (error) {
        console.log("Error: " + error);
        return error;
      }
}

export const postReview=async (data)=>{
    try {
        let resp = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/reviews`, {
            "animeId": data.animeId,
            "rating": data.rating,
            "review": data.review  
        },{
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        });
        return resp;
    } catch (error) {
      console.log("Error: " + error);
      return error;
    }

}

export const getReview=async (id)=>{
    try{
        let resp= await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/reviews/${id}`)
        return resp
    }
    catch (error) {
        console.log("Error: " + error);
        return error;
      }
}