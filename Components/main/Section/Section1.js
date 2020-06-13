import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Picker, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'

import Divider from 'react-native-divider';


export default function Section1() {
    const [date, setDate] = useState(new Date());
    const [dateaniv, setdateaniv] = useState('');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [sexe, setsexe] = useState('');

    const [Statutmatrimonial, setStatutmatrimonial] = useState('');
    const [autreStatutmatrimonial, setautreStatutmatrimonial] = useState('');

    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        const currentDatee = currentDate.toDateString();
        setdateaniv(currentDatee)
    };


    return (
        <View style={styles.container}>

            <View style={{ marginTop: 30 }} />

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Date de naissance :</Text>

                <View style={{ alignItems: "center" }}>
                    <DatePicker
                        style={styles.datepicker}
                        placeholder="Sélectionnez une date"
                        value={date}
                        mode={mode}
                        format="YYYY-MM-DD"
                        onChange={onChange}
                    />
                </View>
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Sexe :</Text>
                <Picker
                    selectedValue={sexe}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setsexe(itemValue)
                    }>
                    <Picker.Item label="Homme" value="Homme" />
                    <Picker.Item label="Femme" value="Femme" />
                </Picker>
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Statut matrimonial :</Text>
                <Picker
                    selectedValue={Statutmatrimonial}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setStatutmatrimonial(itemValue)
                    }>
                    <Picker.Item label="Célibataire" value="Célibataire" />
                    <Picker.Item label="Marié" value="Marié" />
                    <Picker.Item label="Divorcé(e)" value="Divorcé(e)" />
                    <Picker.Item label="Veuf(ve)" value="Veuf(ve)" />
                    <Picker.Item label="Non précisée" value="non" />
                </Picker>

                {Statutmatrimonial == 'non' ?
                    <TextInput placeholder="Précisez..."
                        style={styles.textInput}
                        value={autreStatutmatrimonial}
                        onChangeText={text => setautreStatutmatrimonial(text)}
                        placeholderTextColor={'#d3d0d2'}

                    />
                    : null
                }
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Nombre d’enfants :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Écrivez ici..."
                    value={autreStatutmatrimonial}
                    onChangeText={text => setautreStatutmatrimonial(text)}
                    placeholderTextColor={'#d3d0d2'}
                    keyboardType='numeric'
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#273c75',
        marginLeft: 10,
        marginRight: 10,
    },
    zone: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ecf0f1',
        marginTop: 7,
        marginBottom: 7,
    },
    zoneText: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        color: '#ecf0f1',
    },
    picker: {
        width: 180,
        marginBottom: 5,
        marginLeft: 38,
        color: '#ecf0f1',
        alignSelf: "center"
    },
    datepicker: {
        width: 250,
        marginTop: 15,
        marginBottom: 15,
    },
    textInput: {
        width: 180,
        height: 40,
        fontSize: 16,
        color: '#ecf0f1',
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d0d2',
    },
});
