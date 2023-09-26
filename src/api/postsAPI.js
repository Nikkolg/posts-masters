const limit = 15

export const postsAPI = {
    fetchPosts() {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts/?_sort=id&_order=desc&_limit=${limit}`)
                .then((response) => response.json())
                .then((posts) => posts);
        } catch (ex) {
            console.log(ex);
        }
    },
    fetchById(id) {
        try {
            if (!id) {
                throw new Error ('Id is broken')
            }
    
            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => response.json())
                .then((post) => post);
        } catch (ex) {
            console.log(ex);
        }
    }
}