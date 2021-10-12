import { useEffect, useState } from "react"
import initAuthentication from "../Fierbase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    const googlePrvider = new GoogleAuthProvider();

    const auth = getAuth();
    const singInUsinGoogle = () => {
        signInWithPopup(auth, googlePrvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    /* Log Out ke Kaj Korano Jonno eita extra korthe hoi */
    /* Class No : 03  Start*/
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside State user', user);
                setUser(user);
            }
        })
    }, [])
    /* Class No : 03  End*/

    return {
        user,
        error,
        singInUsinGoogle,
    }
}


export default useFirebase;