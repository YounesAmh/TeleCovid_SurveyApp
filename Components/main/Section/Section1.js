import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';


export default function Section1() {
    const [date, setDate] = useState(new Date());
    const [dateaniv, setdateaniv] = useState('');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [sexe, setsexe] = useState('');

    const [Statutmatrimonial, setStatutmatrimonial] = useState('');
    const [autreStatutmatrimonial, setautreStatutmatrimonial] = useState('');
    const [NbEnfants, setNbEnfants] = useState('');

    const onChange = (event, selectedDate) => {
        setShow(false)
        const currentDate = selectedDate || date;
        const currentDatee = currentDate.toDateString();
        setdateaniv(currentDatee)
    };

    let sexechoices = [{ value: 'Homme', }, { value: 'Femme', }];
    let statutchoices = [{ value: 'Célibataire', }, { value: 'Marié', }, { value: 'Divorcé(e)', }, { value: 'Veuf(ve)', }, { value: 'Non précisée', }];


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
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={sexechoices}
                    selectedItem={sexe}
                    baseColor='#ecf0f1'
                />
            </View>

            <View style={styles.zone}>
                <Text style={styles.zoneText}>Statut matrimonial :</Text>
                <Dropdown
                    value={'Cliquez ici...'}
                    containerStyle={styles.dropdowncontainer}
                    style={styles.dropdown}
                    data={statutchoices}
                    selectedItem={sexe}
                    onChangeText={value => setStatutmatrimonial(value)}
                    baseColor='#ecf0f1'
                />

                {Statutmatrimonial == 'Non précisée' ?
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
                    value={NbEnfants}
                    onChangeText={value => setNbEnfants(value)}
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
    dropdowncontainer: {
        width: 200,
        alignSelf: "center",
        marginTop: -15,
        marginBottom: 15,
    },
    dropdown: {
        color: '#ecf0f1',
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
        marginLeft: 25,
        color: '#ecf0f1',
    },
    datepicker: {
        width: 250,
        marginTop: 15,
        marginBottom: 15,
    },
    textInput: {
        width: 200,
        height: 40,
        fontSize: 16,
        color: '#ecf0f1',
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d3d0d2',
    },
});
