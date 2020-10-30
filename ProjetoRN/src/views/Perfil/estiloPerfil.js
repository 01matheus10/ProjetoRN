import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '80%',
      height: '70%',
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
      fotoContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
      foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
      nome: {
        color: '#000000',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 25,
    },
});

  export default estiloPerfil;