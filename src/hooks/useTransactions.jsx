import React from 'react'
import { useState, useEffect } from 'react'
import {db} from '../firebaseConfig'
import {collection, getDocs, query, orderBy, getDoc} from "firebase/firestore"

const useTransactions = (userId) => {
  const [transactions,  setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seError] = useState(null)

  useEffect(()=>{
    const fetchTransactions = async ()=>{
      try {
        const transactionsRef = collection(db, `user/${userId}/transactions`);

        const q = query(transactionsRef, orderBy("date", "desc"))

        const querysnapshot = await getDocs(q)

        const transactionsData = querysnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setTransactions(transactionsData)
      } catch (error) {
        setError("eeror al obtener las transacciones ")
      } finally {
        setLoading(false)
      }
    };

    if(userId){
      fetchTransactions()
    }
  }, [userId])
  return (
    transactions, loading, error
  )
}

export default useTransactions