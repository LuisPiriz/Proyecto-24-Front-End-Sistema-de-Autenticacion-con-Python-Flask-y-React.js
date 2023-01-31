const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            auth: false,
            personajes: [],
            personajes2: {},
            planetas: [],
            planetas2: {},
            vehiculos: [],
            vehiculos2: {},
            favoritos: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.error(err));
                fetch("https://www.swapi.tech/api/planets")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }))
                    .catch((err) => console.error(err));
                fetch("https://www.swapi.tech/api/vehicles")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculos: data.results
                    }))
                    .catch((err) => console.error(err));
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            signup: (userEmail, userPassword, userName, userfirstName, userlastName) => {
                fetch('https://3000-luispiriz-proyecto23bui-cde0aqka4jj.ws-us84.gitpod.io/signup', {
                        method: 'POST', 
                        mode: 'no-cors',
                        credentials: 'include',
                        headers: {
                            // 'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword,
                            "username": userName,
                            "firstName": userfirstName,
                            "lastname": userlastName,
                        }) // body data type must match "Content-Type" header
                    })
                    .catch((err) => console.log(err))
            },
            login: (userEmail, userPassword) => {
                fetch('https://3000-luispiriz-proyecto23bui-cde0aqka4jj.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },
            getInfoCharacters: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes2: data.result
                    }))
                    .catch((err) => console.error(err));
            },
            getInfoPlanets: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas2: data.result
                    }))
                    .catch((err) => console.error(err));
            },
            getInfoVehicles: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculos2: data.result
                    }))
                    .catch((err) => console.error(err));
            },
            agregarFavorito: (favs) => {

                const store = getStore()
                setStore({
                    favoritos: [...store.favoritos, favs]
                })
                console.log(store.favoritos);
            },
            borrarFavorito: (favs) => {
                const store = getStore()
                setStore(
                    {favoritos: store.favoritos.filter((item, i) => item !== favs)})
            },
            cambiadorIndex: (laid) => {
                let crazyNumber = 0;
                if (laid==4) {
                    crazyNumber = "0";
                }else if (laid==7) {
                    crazyNumber = "1";
                }else if (laid==6) {
                    crazyNumber = "2";
                }else if (laid==8) {
                    crazyNumber = "3";
                }else if (laid==14) {
                    crazyNumber = "4";
                }else if (laid==18) {
                    crazyNumber = "5";
                }else if (laid==16) {
                    crazyNumber = "6";
            }else if (laid==19) {
                    crazyNumber = "7";
                }else if (laid==20) {
                    crazyNumber = "8";
                }else {
                    crazyNumber = "9";
                
                }
                return crazyNumber;
                },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;