import React, { useState, useEffect, useContext } from "react";
import BooksItem from "./booksItem";
import Context from "../stateProvider";
import { booksRef } from "../firebase";

export const BooksList = (props) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    booksRef.get().then((querySnapshot) => {
      console.log(querySnapshot);
      //       querySnapshot ={
      //         docs:[..........],
      //         empty:true,
      // size:10,

      //       }
      // querySnapshot.docs = [
      //   {
      //     id: "sf122dgsafgd",
      //     data: {
      //       autho: "ysad",
      //       tital: "sdad",
      //     },
      //   },
      //   {
      //     id: "sfd111gsafgd",
      //     data: {
      //       autho: "ysad",
      //       tital: "sdad",
      //     },
      //   },
      //   {
      //     id: "sf33dgsafgd",
      //     data: {
      //       autho: "ysad",
      //       tital: "sdad",
      //     },
      //   },
      // ];
      const booksList = [];
      querySnapshot.docs.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        //   doc = {
        //     id: "sfdgsafgd",
        //     data: () => {
        //       return {
        //         autho: "ysad",
        //         tital: "sdad",
        //       };
        //     },
        //   };
        //booksRef.doc(doc.id).delete();

        booksList.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      dispatch({
        type: "SET_BOOKS",
        booksList: booksList,
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
  }, [dispatch]);

  return (
    <div>
      {state.booksList.map((book) => {
        return (
          <BooksItem author={book.author} title={book.title} key={book.id} />
        );
      })}
    </div>
  );
};

// by the way guy the collection name is books
// you only will deal with this one
// @channel Instructions:
// get all the books and display them as a list
// when the user submit the form send the book information (title, author) to the firebase database
// [optional] when the user click the delete icon you should delete this book
