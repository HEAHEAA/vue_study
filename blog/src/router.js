// import { createWebHistory, createRouter } from "vue-router";
import { createRouter, createWebHashHistory } from 'vue-router'
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Error from "./components/ErrorPage.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id(\\d+)", //파라미터 넣기 (\\d+) -> 정규식 숫자만 나오게
        component: Detail,
        children: [ //파라미터 안에 또 다른 페이지 필요할때
            {
                path: "author",
                component: Author
            },
            {
                path: "comment",
                component: Comment
            }
        ]
    },
    {
        path: "/:anything(.*)", //404 페이지 같은거
        component: Error
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
