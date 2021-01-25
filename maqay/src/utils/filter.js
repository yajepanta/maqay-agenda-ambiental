const filteredPostsByTagNumber = (tagNumber, allPosts) => {
    return allPosts.filter(post => post.tags.map(tag=>{return tag === tagNumber}))
}

export default filteredPostsByTagNumber;