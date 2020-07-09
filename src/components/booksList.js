import React, { useState, useEffect, useContext } from 'react';
import BooksItem from './booksItem';
import Context from "../stateProvider";
import {booksRef} from "../firebase";

export  const BooksList = (props) => {
    const [state, dispatch] = useContext(Context);

  
    
    booksRef.get().then((querySnapshot)=> {
        console.log(querySnapshot);
        
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
    
//     booksRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });



    return (
        <div>

        </div>
    );
};

// by the way guy the collection name is books
// you only will deal with this one
// @channel Instructions:
// get all the books and display them as a list
// when the user submit the form send the book information (title, author) to the firebase database
// [optional] when the user click the delete icon you should delete this book