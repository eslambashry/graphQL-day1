import { comments, users,posts } from "./_DB.js"

export const resolvers = {
    Query: {
        users() {
            return users;
        },
        user(_, args) {
            return users.find(user => user.id === args.id);
        },
        posts() {
            return posts;
        },
        post(_, args) {
            return posts.find(post => post.id === args.id);
        },
        comments() {
            return comments;
        },
        comment(_, args) {
            return comments.find(comment => comment.id === args.id);
        }
    },

    Mutation: {
        addPost: (_, { post }) => {
            const newPost = {
                id: posts.length + 1,
                userId: post.userId,
                title: post.title,
                body: post.body
            };
            posts.push(newPost);
            return newPost;
        },
        updatePost: (_, { id, post }) => {
            const index = posts.findIndex(p => p.id === id);
            if (index === -1) return null;

            posts[index].title = post.title;
            posts[index].body = post.body;
            return posts[index];
        },
        deletePost: (_, { id }) => {
            const index = posts.findIndex(post => post.id === id);
            if (index === -1) return null;

            const deletedPost = posts.splice(index, 1)[0];
            return deletedPost;
        },
        addComment: (_, { comment }) => {
            const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
            const newComment = {
                id: newId,
                postId: comment.postId,
                name: comment.name,
                email: comment.email,
                body: comment.body
            };
            comments.push(newComment);
            return newComment;
        },
        updateComment: (_, { id, comment }) => {
            const index = comments.findIndex(c => c.id === id);
            if (index === -1) return null;

            comments[index].body = comment.body;
            return comments[index];
        },
        deleteComment: (_, { id }) => {
            const index = comments.findIndex(comment => comment.id === id);
            if (index === -1) return null;

            const deletedComment = comments.splice(index, 1)[0];
            return deletedComment;
        }
    },

    User: {
        posts(parent) {
            return posts.filter(post => post.userId === parent.id);
        }
    },
  
    Post: {
        comments(parent) {
            return comments.filter(comment => comment.postId === parent.id);
        }
    }
};
