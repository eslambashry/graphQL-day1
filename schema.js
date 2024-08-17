export const schema = `#graphql

    type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo!
    }

    type Geo {
    lat: String
    lng: String
    }

    type Company{
        id: Int
        name: String
        catchPhrase: String
        bs : String
    }



    type User {
    id: Int
    name: String
    username: String
    email: String
    phone: String
    website: String
    address: Address
    company : Company
    posts: [Post]
    }

        type Post {
            id: Int
            userId: Int
            title: String
            body: String
            comments: [Comment]

        }
        type Comment {
        id: Int
        postId:Int
        name: String
        email: String
        body: String
        }

    type Query{
      
        users:[User]
        user(id:Int):User
        posts:[Post]
        post(id:Int):Post
        comments:[Comment]
        comment(id:Int):Comment
    }
    type Mutation{
    addPost(post:postInput):Post
    updatePost(id:Int,post:updateInput):Post
    deletePost(id:Int):Post
    addComment(comment:commentInput):Comment
    updateComment(id:Int,comment:updateCommentInput):Comment
    deleteComment(id:Int): Comment
    }


    input postInput{
    userId: Int
    title: String
    body: String
    }

    input updateInput{
    title: String
    body: String
    }

     input commentInput{
        postId:Int
        name: String
        email: String
        body: String
    }

    input updateCommentInput{
    body: String
    }




`





