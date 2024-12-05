import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyReviews = () => {
    const { users } = useContext(AuthContext);
    // console.log(users);
    console.log(users?.uid);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${users?.uid}`, {
            
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.log('error', error);
        })
    },[])

    return (
        <div>
            My Reviews Page....
            
        </div>
    );
};

export default MyReviews;