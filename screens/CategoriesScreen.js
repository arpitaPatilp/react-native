import { CATEGORIES } from '../data/dummy-data';
import { FlatList,StyleSheet,View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData) {
    function pressHandler(){
    navigation.navigate('MealsOverview',{
      categoryId:itemData.item.id
    });
  }
    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    );
  }

  return (

    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}>
      </FlatList>
    </View>
  );
}
export default CategoriesScreen;

const styles=StyleSheet.create({
  container:{
    //marginTop:50
  }
})
