import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()


userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `bearer ${token}`
    return config
})

function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "", 
        posts: [],
        allPosts: [], 
        errMsg: ""
    } 

    // const comments = []

    const [userState, setUserState] = useState(initState)


    function signUp(credentials){ 
        axios.post("/auth/signup", credentials)
            .then(res => { 
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prev => ({
                    ...prev, 
                    user,
                    token
                }))

            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function login(credentials){ 
        axios.post("/auth/login", credentials)
            .then(res => { 
                const {token, user} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getAllPosts()
                getPosts()
                setUserState(prev => ({ 
                    ...prev, 
                    user, 
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function logout(){ 
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUserState({ 
            user: {}, 
            token: "",
            posts: []
        })
    }

    function handleAuthError(errMsg){ 
        setUserState(prev => ({ 
            ...prev, 
            errMsg
        }))
    }

    function resetAuthError(){ 
        setUserState({ 
            errMsg: ""
        })
    }

    function addPost(newPost){ 
        userAxios.post("/api/posts", newPost)
            .then(res => setUserState(prev => ({ 
                ...prev, 
                posts: [...userState.posts, res.data],
                allPosts: [...userState.allPosts, res.data]
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getPosts(){ 
        userAxios.get("/api/posts/user")
            .then(res => setUserState(prev => ({ 
                ...prev, 
                posts: res.data
            })))
            .catch(err => console.log(err))
    }

    function getAllPosts(){ 
        userAxios.get("/api/posts/posts")
            .then(res => setUserState(prev => ({ 
                ...prev, 
                allPosts: res.data
            })))
            
            .catch(err => console.log(err))
    }

    function deletePost(postId){ 
        userAxios.delete(`/api/posts/${postId}`)
            .then(res => setUserState(prevPosts => ({ 
                ...prevPosts,
                posts: prevPosts.posts.filter(posts => posts._id !== postId),
                allPosts: prevPosts.posts.filter(posts => posts._id !== postId)
            })))
            .catch(err => console.log(err))
    }

    function editPost(postId, updates){ 
        userAxios.put(`/api/posts/${postId}`, updates)
            .then(res => setUserState(prev => ({ 
                ...prev,
                posts: prev.posts.map(post => post._id !== postId ? post : updates),
                allPosts: prev.posts.map(post => post._id !== postId ? post : updates)
            })))
    }


    function reloaded(){ 
        
        getPosts()
        getAllPosts()
    }

    useEffect(() => { 
        reloaded()
    }, [])

    return( 
        <UserContext.Provider value = {{ 
            ...userState, 
            signUp,
            login,
            logout,
            resetAuthError,
            addPost,
            deletePost,
            editPost,
            
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserProvider