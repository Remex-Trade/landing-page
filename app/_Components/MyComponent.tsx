import { useContext } from "react";
import { useAccount } from "wagmi";
import userContext from "../_context/userContext";

// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const {user,setUser} = useContext(userContext);
  const { address} = useAccount();
  if(address){
    setUser(address);
  }
  return(<></>)
};

export default MyComponent;