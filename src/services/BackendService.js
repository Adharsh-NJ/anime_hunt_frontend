import axios from 'axios'
const API_URL=process.env.REACT_APP_BACKEND_API_URL


export const signIn=async (data)=>{
    try {
        let resp = await axios.post(API_URL+'/user/signin', {
          
                "email":data.email,
                "password":data.password,

        });
        localStorage.setItem("token",resp.data.token)
        localStorage.setItem("userId",resp.data.userData.userId)
        return resp;
      } catch (error) {
        console.log("Error: " + error);
        return error;
      }

}

export const signUp=async (data)=>{
    try {
        let resp = await axios.post(API_URL+'/user/signup', {
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
        let resp = await axios.post(API_URL+'/reviews', {
            "userId": localStorage.getItem('userId'),
            "animeId": data.animeId,
            "rating": data.rating,
            "review": data.review
                
        });
        return resp;
    } catch (error) {
      console.log("Error: " + error);
      return error;
    }

}

export const getReview=async (id)=>{
    try{
        let resp= await axios.get(API_URL+`/reviews/${id}`)
        return resp
    }
    catch (error) {
        console.log("Error: " + error);
        return error;
      }
}