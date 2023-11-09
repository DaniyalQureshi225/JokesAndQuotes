import React, { useState } from 'react';
import {  Text, Dimensions } from 'react-native';
import AppButton from '../../Components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;



const Home = () => {
  const [joke, setJoke] = useState('');
  const [quote, setQuote] = useState('');
  const apiKey = 'wVVctTP5NhzjqCz4eiEtlQ==cJeKfc9xCMODDjjk';
  const baseUrl = 'https://api.api-ninjas.com/v1/';

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch(`${baseUrl}jokes?category=happiness`, {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('>>>>>>>>>>>',data);
      setJoke(data?.[0]?.joke); 
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(`${baseUrl}quotes?category=happiness`, {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setQuote(data?.[0]?.quote); 
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  console.log(joke, quote);

  return (
    <SafeAreaView style={{width:width*0.9, alignSelf:'center'}}>
      <Text style={{alignSelf:'center', color:'red', marginVertical:10, fontSize:20}}>Jokes & Quotes</Text>

     
      <AppButton Tex={'Get Joke'} onPress={fetchRandomJoke} />

     
      <Text style={{color:'#000', fontSize:20}}>{joke}</Text>

     
      <AppButton  Tex={'Get Quote'} onPress={fetchRandomQuote} />

      
      <Text style={{color:'#000', fontSize:20}}>{quote}</Text>
    </SafeAreaView>
  );
};

export default Home;
