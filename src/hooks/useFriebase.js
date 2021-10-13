import { useEffect, useState } from "react"
import initAuthentication from "../Fierbase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, /* GithubAuthProvider, */ } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    const googlePrvider = new GoogleAuthProvider();
    /* const githubProvider = new GithubAuthProvider(); */

    const auth = getAuth();
    const singInUsinGoogle = () => {
        signInWithPopup(auth, googlePrvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    /* Github Login Activities */
    /*     const singInUsingGithub = () => {
            signInWithPopup(auth, githubProvider)
                .then(result => {
                    console.log(result.user);
                    setUser(result.user);
                })
        }
     */    /* Log Out ke Kaj Korano Jonno eita extra korthe hoi */
    /* Class No : 04 */
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    /* Class No : 03  Start*/
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside State user', user);
                setUser(user);
            }
        })
    }, [auth]);
    /* Class No : 03  End*/


    return {
        user,
        error,
        singInUsinGoogle,
        /* singInUsingGithub, */
        logout,
    }
}


export default useFirebase;