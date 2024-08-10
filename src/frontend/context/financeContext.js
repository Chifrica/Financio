// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';

// export const FinanceContext = createContext();

// export const FinanceProvider = ({ children }) => {
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     const loadFinanceData = async () => {
//       try {
//         const savedBalance = await AsyncStorage.getItem('totalBalance');
//         const savedExpenses = await AsyncStorage.getItem('expenses');

//         if (savedBalance) setTotalBalance(parseFloat(savedBalance));
//         if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
//       } catch (error) {
//         Alert.alert('Error', 'Failed to load finance data.');
//       }
//     };
//     loadFinanceData();
//   }, []);

//   const updateBalance = async (newBalance) => {
//     setTotalBalance(newBalance);
//     try {
//       await AsyncStorage.setItem('totalBalance', newBalance.toFixed(2));
//     } catch (error) {
//       Alert.alert('Error', 'Failed to update total balance.');
//     }
//   };

//   const addExpense = async (newExpense) => {
//     const updatedExpenses = [...expenses, newExpense];
//     const updatedBalance = totalBalance - parseFloat(newExpense.price);

//     setExpenses(updatedExpenses);
//     setTotalBalance(updatedBalance.toFixed(2));

//     try {
//       await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
//       await AsyncStorage.setItem('totalBalance', updatedBalance.toFixed(2));
//     } catch (error) {
//       Alert.alert('Error', 'Failed to add expense.');
//     }
//   };

//   return (
//     <FinanceContext.Provider value={{ totalBalance, expenses, updateBalance, addExpense }}>
//       {children}
//     </FinanceContext.Provider>
//   );
// };
