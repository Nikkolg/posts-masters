
export const useComponentEssence = (list, limitPostOnPage, searchTerm, sortBy) => {
    let filteredPosts = list ? [...list] : [];

    if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().startsWith(searchTermLower)
        );
    }
    
    if (sortBy === "asc") {
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "desc") {
        filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    const totalPageCount = Math.ceil(filteredPosts.length / limitPostOnPage);
    
    return { filteredPosts, totalPageCount };
};


