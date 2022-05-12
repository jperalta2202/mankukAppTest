const axios = require('axios')

const API = 'https://test-mankuk-api.azurewebsites.net/';

export const getPersons = async () => {
    try {
        return await axios.get(API + 'person', 
            {headers: { 'Access-Control-Allow-Origin': '*' }});
    } catch (err) {
        console.log(err)
    }
};


export const getForms = async () => {
    try {
        return await axios.get(API + 'siteForm', 
            {headers: { 'Access-Control-Allow-Origin': '*' }});
    } catch (err) {
        console.log(err)
    }
};

export const sendForm = async (diccionario) => {
    /* se probo este diccionario en Postman y funciona bien */
    try {
        const res = await axios.post(API + 'siteForm', diccionario, {
            headers: { 'Access-Control-Allow-Origin': '*' , 
                Accept: "application/json", 
                "Content-Type": "application/json"}
            });
        res.data.data

    } catch (err) {
        console.log(err)
    }
};

/*
const json = JSON.stringify({ name: 'deven' });
const res = await axios.post('<https://test.org/post>', json, {
  headers: {
    'Content-Type': 'application/json'
  }
});

res.data.data; // '{"name":"deven"}'
res.data.headers['Content-Type']; // 'application/json',
*/







