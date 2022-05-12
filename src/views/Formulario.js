import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import {sendForm} from '../../api';

const Form = ({navigation}) => {
  const [projectName, setProjectName] = useState('');
  const [site, setSite] = useState('');
  const [coordE, setCoordE] = useState('');
  const [coordN, setCoordN] = useState('');
  const [unit, setUnit] = useState('');
  const [responsibles, setResponsibles] = useState('');
  const [sector, setSector] = useState('');
  const [dimension, setDimension] = useState('');
  const [layer, setLayer] = useState('');
  const [level, setLevel] = useState('');
  const [features, setFeatures] = useState('');
  const [sedimentType, setSedimentType] = useState('');
  const [compaction, setCompaction] = useState('');
  const [munshell, setMunshell] = useState('');
  const [inclusionType, setInclusionType] = useState('');
  const [inclusionSize, setInclusionSize] = useState('');
  const [inclusionDensity, setInclusionDensity] = useState('');
  const [organicMatter, setOrganicMatter] = useState('');
  const [humidity, setHumidity] = useState('');
  const [observations1, setObservations1] = useState('');
  const [crockery, setCrockery] = useState(0);
  const [metal, setMetal] = useState(0);
  const [glass, setGlass] = useState(0);
  const [ceramic, setCeramic] = useState(0);
  const [lithic, setLithic] = useState(0);
  const [leather, setLeather] = useState(0);
  const [textile, setTextile] = useState(0);
  const [animalBones, setAnimalBones] = useState(0);
  const [wood, setWood] = useState(0);
  const [bioAntro, setBioAntro] = useState(0);
  const [archeoBotanical, setArcheoBotanical] = useState(0);
  const [malacological, setMalacological] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [observations2, setObservations2] = useState('');

  const logo = require('./../../assets/Logotipo_Sin_Fondo_Mankuk.png');

  const handleSubmitPress = () => {
    if (!projectName) {
      alert('Please fill projectName');
      return;
    }
    if (!site) {
      alert('Please fill site');
      return;
    }
    if (!coordE) {
      alert('Please fill coordE');
      return;
    }
    if (!coordN) {
      alert('Please fill coordN');
      return;
    }
    if (!unit) {
      alert('Please fill unit');
      return;
    }
    if (!responsibles) {
      alert('Please fill responsibles');
      return;
    }
    if (!sector) {
      alert('Please fill sector');
      return;
    }
    if (!dimension) {
      alert('Please fill dimension');
      return;
    }
    if (!layer) {
      alert('Please fill layer');
      return;
    }

    if (!level) {
      alert('Please fill level');
      return;
    }
    if (!features) {
      alert('Please fill features');
      return;
    }
    if (!sedimentType) {
      alert('Please fill sedimentType');
      return;
    }
    if (!compaction) {
      alert('Please fill compaction');
      return;
    }
    if (!munshell) {
      alert('Please fill munshell');
      return;
    }
    if (!inclusionType) {
      alert('Please fill inclusionType');
      return;
    }
    if (!inclusionSize) {
      alert('Please fill inclusionSize');
      return;
    }
    if (!inclusionDensity) {
      alert('Please fill inclusionDensity');
      return;
    }
    if (!organicMatter) {
      alert('Please fill organicMatter');
      return;
    }
    if (!humidity) {
      alert('Please fill humidity');
      return;
    }
    if (!observations1) {
      alert('Please fill observations');
      return;
    }
    if (!observations2) {
      alert('Please fill observations');
      return;
    }

    var date = new Date().getDate(); //To get the Current Date
    if (date < 10) {
      date = '0' + date;
    }
    var month = new Date().getMonth() + 1; //To get the Current Month
    if (month < 10) {
      month = '0' + month;
    }
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    if (hours < 10) {
      hours = '0' + hours;
    }
    var min = new Date().getMinutes(); //To get the Current Minutes
    if (min < 10) {
      min = '0' + min;
    }
    var sec = new Date().getSeconds(); //To get the Current Seconds
    if (sec < 10) {
      sec = '0' + sec;
    }
    var mil = new Date().getMilliseconds(); //To get the Current Seconds
    if (mil < 10) {
      mil = '0' + mil;
    }
    let fecha =
      year +
      '-' +
      month +
      '-' +
      date +
      'T' +
      hours +
      ':' +
      min +
      ':' +
      sec +
      '.' +
      mil +
      'Z';

    const diccionario = {
      projectName: projectName,
      date: fecha,
      site: site,
      coordE: coordE,
      coordN: coordN,
      unit: unit,
      responsibles: responsibles,
      sector: sector,
      dimension: dimension,
      layer: layer,
      level: level,
      features: features,

      matrixDescription: {
        sedimentType: sedimentType,
        compaction: compaction,
        munshell: munshell,
        inclusionType: inclusionType,
        inclusionSize: inclusionSize,
        inclusionDensity: inclusionDensity,
        organicMatter: organicMatter,
        humidity: humidity,
        observations: observations1,
      },

      materialDescription: {
        crockery: crockery,
        metal: metal,
        glass: glass,
        ceramic: ceramic,
        lithic: lithic,
        leather: leather,
        textile: textile,
        animalBones: animalBones,
        wood: wood,
        bioAntro: bioAntro,
        archeoBotanical: archeoBotanical,
        malacological: malacological,
        totalNumber: totalNumber,
        observations: observations2,
      },
    };

    sendForm(diccionario);

    if (diccionario) {
      alert('Formulario enviado con éxito');
      return;
    }
  };

  return (
    <View style={styles.form}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>DESCRIPCIÓN MATRIZ</Text>
        <Image source={logo} style={styles.image} />

        <TextInput
          style={styles.formInput}
          value={projectName}
          placeholder="Nombre del Proyecto"
          onChangeText={text => setProjectName(text)}
        />
        <TextInput
          style={styles.formInput}
          value={site}
          placeholder="Site"
          onChangeText={text => setSite(text)}
        />
        <TextInput
          style={styles.formInput}
          value={coordE}
          placeholder="CoordE"
          onChangeText={text => setCoordE(text)}
        />
        <TextInput
          style={styles.formInput}
          value={coordN}
          placeholder="CoordN"
          onChangeText={text => setCoordN(text)}
        />
        <TextInput
          style={styles.formInput}
          value={unit}
          placeholder="Unit"
          onChangeText={text => setUnit(text)}
        />
        <TextInput
          style={styles.formInput}
          value={responsibles}
          placeholder="Responsables"
          onChangeText={text => setResponsibles(text)}
        />
        <TextInput
          style={styles.formInput}
          value={sector}
          placeholder="Sector"
          onChangeText={text => setSector(text)}
        />
        <TextInput
          style={styles.formInput}
          value={dimension}
          placeholder="Dimension"
          onChangeText={text => setDimension(text)}
        />
        <TextInput
          style={styles.formInput}
          value={layer}
          placeholder="Layer"
          onChangeText={text => setLayer(text)}
        />
        <TextInput
          style={styles.formInput}
          value={level}
          placeholder="Level"
          onChangeText={text => setLevel(text)}
        />
        <TextInput
          style={styles.formInput}
          value={features}
          placeholder="Features"
          onChangeText={text => setFeatures(text)}
        />
        <TextInput
          style={styles.formInput}
          value={sedimentType}
          placeholder="Tipo de sedimento"
          onChangeText={text => setSedimentType(text)}
        />
        <TextInput
          style={styles.formInput}
          value={compaction}
          placeholder="Compactación"
          onChangeText={text => setCompaction(text)}
        />
        <TextInput
          style={styles.formInput}
          value={munshell}
          placeholder="Código Munshell"
          onChangeText={text => setMunshell(text)}
        />
        <TextInput
          style={styles.formInput}
          value={inclusionType}
          placeholder="Tipo de inclusión"
          onChangeText={text => setInclusionType(text)}
        />
        <TextInput
          style={styles.formInput}
          value={inclusionSize}
          placeholder="Tamaño de inclusiones"
          onChangeText={text => setInclusionSize(text)}
        />
        <TextInput
          style={styles.formInput}
          value={inclusionDensity}
          placeholder="Densidad de inclusiones"
          onChangeText={text => setInclusionDensity(text)}
        />
        <TextInput
          style={styles.formInput}
          value={organicMatter}
          placeholder="Contenido de materia orgánica"
          onChangeText={text => setOrganicMatter(text)}
        />
        <TextInput
          style={styles.formInput}
          value={humidity}
          placeholder="Humedad"
          onChangeText={text => setHumidity(text)}
        />
        <TextInput
          style={styles.formInput}
          multiline={true}
          numberOfLines={5}
          value={observations1}
          placeholder="Obersvaciones"
          onChangeText={text => setObservations1(text)}
        />
        <View style={styles.numeric}>
          <Text style={styles.text2}>Loza</Text>
          <NumericInput type="up-down" onChange={value => setCrockery(value)} />
          <Text style={styles.text2}>Metal</Text>
          <NumericInput type="up-down" onChange={value => setMetal(value)} />
          <Text style={styles.text2}>vidrio</Text>
          <NumericInput type="up-down" onChange={value => setGlass(value)} />
          <Text style={styles.text2}>Ceramica</Text>
          <NumericInput type="up-down" onChange={value => setCeramic(value)} />
          <Text style={styles.text2}>lítico</Text>
          <NumericInput type="up-down" onChange={value => setLithic(value)} />
          <Text style={styles.text2}>Cuero</Text>
          <NumericInput type="up-down" onChange={value => setLeather(value)} />
          <Text style={styles.text2}>Textil</Text>
          <NumericInput type="up-down" onChange={value => setTextile(value)} />
          <Text style={styles.text2}>Osteofauna</Text>
          <NumericInput
            type="up-down"
            onChange={value => setAnimalBones(value)}
          />
          <Text style={styles.text2}>Madera</Text>
          <NumericInput type="up-down" onChange={value => setWood(value)} />
          <Text style={styles.text2}>Bioantropológico</Text>
          <NumericInput type="up-down" onChange={value => setBioAntro(value)} />
          <Text style={styles.text2}>Arqueobotánico</Text>
          <NumericInput
            type="up-down"
            onChange={value => setArcheoBotanical(value)}
          />
          <Text style={styles.text2}>Malacológico</Text>
          <NumericInput
            type="up-down"
            onChange={value => setMalacological(value)}
          />
          <Text style={styles.text2}>Número total de materiales</Text>
          <NumericInput
            placeholder="TotalNumber"
            type="up-down"
            onChange={value => setTotalNumber(value)}
          />
        </View>

        <TextInput
          style={styles.formInput}
          multiline={true}
          numberOfLines={5}
          value={observations2}
          placeholder="Observaciones de los materiales"
          onChangeText={text => setObservations2(text)}
        />
        <Button onPress={handleSubmitPress} title="Submit" />
      </ScrollView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
  },
  formInput: {
    margin: 5,
    fontSize: 20,
    marginHorizontal: 10,
    borderColor: 'gray',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 400,
    height: 200,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 30,
  },
  text2: {
    fontSize: 25,
    marginTop: 20,
  },
  numeric: {
    flex: 1,
    alignItems: 'center',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  borderColor: 'gray',
  width: '100%',
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
});
