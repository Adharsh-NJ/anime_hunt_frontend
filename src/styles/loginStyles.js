import signupBackground from "../images/signupBackground.png"
import logInBackground from "../images/logInBackground.jpg"

const loginStyles = {
  body: {
    margin: "0px",
    height: "100%",
  },
  signupContainer: {
    backgroundColor: "black",
    float: "left",
  },
  signupPage: {
    backgroundImage: `url(${signupBackground})`,
    backgroundPosition: "100% ",
    position: "absolute",
    height: "100%"
  },
  signinContainer: {
    backgroundColor: "black",
    float: "left",
  },
  signinPage: {
    backgroundImage: `url(${logInBackground})`,
    position: "absolute",
    height: "100%"
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#42a7f5"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#42a7f5"
    }
  }
}

export default loginStyles