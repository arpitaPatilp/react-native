import {View,Text,StyleSheet,Image} from 'react-native';

function MealItem({title,imageUrl,duration,complexity,isVegetarian}){
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:imageUrl}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.items}>
        <Text style={styles.itemsText}>Rs {duration} </Text>
      </View>
    </View> 
  );
  
}
export default MealItem;

const styles=StyleSheet.create({
  container:{
    margin: 16,
    borderWidth:1,
    borderRadius:6,
    padding:10,
    borderColor:'#ccc',
    backgroundColor:'white'
  },
  image:{
    width:'100%',
    height:200,
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    margin:5
  },
  items:{
    flexDirection:'row',
    justifyContent:'center'
  },
  itemsText:{
    fontWeight:'bold',
    fontSize:16,
    margin:4,
    color:"black"
  }
})