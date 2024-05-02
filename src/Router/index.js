import pageOne from "../Pgae/pageOne";
import pageTwo from "../Pgae/pageTwo";
import Home from "../Pgae/Home";
const publicRouter = [
    { path:"/", component: Home},
    { path:"/pageOne", component: pageOne},
    { path:"/pageTwo", component: pageTwo},

]

const privtate = []
export {publicRouter,privtate}