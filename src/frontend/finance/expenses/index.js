import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "./style";

const Expenses = ({ navigation }) => {
    const [expenses, setExpenses] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [totalBalance, setTotalBalance] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [isEditingBalance, setIsEditingBalance] = useState(false);

    useEffect(() => {
        const loadExpenses = async () => {
            try {
                const savedExpenses = await AsyncStorage.getItem('expenses');
                const savedBalance = await AsyncStorage.getItem('totalBalance');
                if (savedExpenses) {
                    setExpenses(JSON.parse(savedExpenses));
                }
                if (savedBalance) {
                    setTotalBalance(savedBalance);
                }
            } catch (error) {
                Alert.alert('Error', 'Failed to load expenses.');
            }
        };
        loadExpenses();
    }, []);

    const handleAddExpense = async () => {
        if (!newCategory || !newPrice) {
            Alert.alert('Input Error', 'Please enter both category and price.');
            return;
        }

        const price = parseFloat(newPrice);
        const updatedBalance = parseFloat(totalBalance) - price;
        const updatedExpenses = [...expenses, { category: newCategory, price: newPrice }];

        setExpenses(updatedExpenses);
        setTotalBalance(updatedBalance.toFixed(2));
        setNewCategory("");
        setNewPrice("");
        setIsAdding(false);

        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            await AsyncStorage.setItem('totalBalance', updatedBalance.toFixed(2));
        } catch (error) {
            Alert.alert('Error', 'Failed to save expenses.');
        }
    };

    const handleDeleteExpense = async (index) => {
        const deletedExpense = expenses[index];
        const updatedBalance = parseFloat(totalBalance) + parseFloat(deletedExpense.price);
        const updatedExpenses = expenses.filter((_, i) => i !== index);

        setExpenses(updatedExpenses);
        setTotalBalance(updatedBalance.toFixed(2));

        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            await AsyncStorage.setItem('totalBalance', updatedBalance.toFixed(2));
        } catch (error) {
            Alert.alert('Error', 'Failed to delete expense.');
        }
    };

    const handleBalanceSubmit = async () => {
        setIsEditingBalance(false);
        try {
            await AsyncStorage.setItem('totalBalance', totalBalance);
        } catch (error) {
            Alert.alert('Error', 'Failed to save total balance.');
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <View style={style.topName}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../../assets/icons/return_back_icon.png')} style={{ height: 30, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={style.topNameTxt}>Expenses</Text>
                </View>
                
                <View style={style.cardBalance}>
                    <Text style={style.subTopNameTxt}>Total Income</Text>
                    {isEditingBalance ? (
                        <TextInput
                            style={{ color: "red", fontSize: 25, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
                            value={totalBalance}
                            onChangeText={setTotalBalance}
                            keyboardType="number-pad"
                            onBlur={handleBalanceSubmit}
                        />
                    ) : (
                        <TouchableOpacity onPress={() => setIsEditingBalance(true)}>
                            <Text style={{ color: "red", fontSize: 25, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                                {totalBalance || "Enter Balance"}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                
                <View style={style.summary}>
                    <Text style={{ textAlign: 'center', color: 'red', fontSize: 18, fontWeight: 'bold' }}>August Summary</Text>

                    <View style={{ marginLeft: 80 }}>
                        {expenses.map((expense, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <TextInput 
                                    style={{ flex: 1 }} 
                                    editable={false} 
                                    value={`${expense.category} ----------------------------- ${expense.price}`} 
                                />
                                <TouchableOpacity onPress={() => handleDeleteExpense(index)}>
                                    <Image source={require('../../../../assets/icons/delete_icon.png')} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

                {isAdding && (
                    <View style={{ margin: 20 }}>
                        <TextInput
                            placeholder="Category"
                            value={newCategory}
                            onChangeText={setNewCategory}
                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 5 }}
                        />
                        <TextInput
                            placeholder="Price"
                            value={newPrice}
                            onChangeText={setNewPrice}
                            keyboardType="number-pad"
                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 5 }}
                        />
                        <Button title="Submit" onPress={handleAddExpense} color="#7C04B4" />
                    </View>
                )}

                <Text style={{ textAlign: 'center', marginVertical: 10 }}>Click to add your monthly expenses.</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#7C04B4', borderRadius: 50, padding: 5, marginBottom: 10 }}
                    onPress={() => setIsAdding(!isAdding)}
                >
                    <Image source={require('../../../../assets/icons/add_icon.png')} />
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', paddingRight: 5 }}>Add</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Expenses;
