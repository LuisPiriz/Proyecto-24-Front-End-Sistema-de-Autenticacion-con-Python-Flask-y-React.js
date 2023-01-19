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
                // setStore({
                //     favoritos: ([...store.favoritos, {"uid": store.personajes.uid, "name": store.personajes.name, "url": store.personajes.url}])
                // })
				setStore({
					    favoritos: [...store.favoritos, {favs}]
				})
                console.log(store.favoritos);
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