import { useEffect, useState, useCallback } from "react";

export default function usePosts(userId){

    const removePost = useCallback(
        (postId) => {
            setPosts(posts.fillter((post) => post.id !== postId));
        },
        [posts]
    );

    return {
        removePost
    }
}